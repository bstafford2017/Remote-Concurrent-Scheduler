const express = require('express')
const insert = require('../../lib/insert')
const remove = require('../../lib/remove')
const select = require('../../lib/select')
const update = require('../../lib/update')
const jwt = require('jsonwebtoken')
const router = express.Router()

// Get all events
router.get('/:search', async (req, res) => {
    try {
        const cols = [
            'events.id',
            'events.title',
            'events.date',
            'events.startTime',
            'events.endTime',
            'buildings.name',
            'rooms.number',
            'users.username'
        ]
        const join = [
            {
                'JOIN': 'users',
                'user': 'users.id'
            },
            {
                'JOIN': 'rooms',
                'room': 'rooms.id'
            },
            {
                'LEFT OUTER JOIN': 'recurs',
                recur: 'recurs.id'
            },
            {
                'JOIN': 'buildings',
                'rooms.building': 'buildings.id'
            }
        ]
        const where = {
            title: req.params.search,
            'rooms.number': req.params.search,
            'buildings.name': req.params.search,
            'users.username': req.params.search,
            date: req.params.search
        }
        const results = await select('events', where, 'OR', cols, join)
        results.sort((a, b) => {
            return a.date - b.date;
        })
        res.json({ results })
    } catch (eer) {
        res.status(400).json({ msg: err })
    }
})

// Get particular month's events
router.get('/:year/:month', async (req, res) => {
    try {
        const where = {
            'YEAR(date)': req.params.year,
            'MONTH(date)': req.params.month,
        }
        const results = await select('events', where, 'AND')
        res.json({ results })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// Get particular day's events
router.get('/:year/:month/:day', async (req, res) => {
    try {
        const cols = [
            'events.id',
            'events.title',
            'events.date',
            'events.startTime',
            'events.endTime',
            'buildings.name',
            'rooms.number',
            'events.room'
        ]
        const join = [
            {
                'join': 'rooms',
                'events.room': 'rooms.id'
            },
            {
                'join': 'buildings',
                'rooms.building': 'buildings.id'
            }
        ]
        const where = {
            date: `${req.params.year}-${req.params.month}-${req.params.day}`
        }
        const results = await select('events', where, 'AND', cols, join)
        res.json({ results })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// Create an event
router.post('/', async (req, res) => {
    try {
        // Validate availibility
        const eventWhere = {
            date: req.body.date,
            startTime: req.body.start,
            endTime: req.body.end,
        }
        const whereCompare = {
            startTime: '>',
            endTime: '<'
        }
        const eventResults = await select('events', eventWhere, 'AND', 
            undefined, undefined, whereCompare, 'OR')
        if(eventResults.length !== 0) {
            res.status(400).json({ msg: 'Room is unavailable during this time / date' })
        }

        // Get logged in user
        const token = req.cookies.token
        const authData = await jwt.verify(token, 'secret-key')
        const userWhere = {
            username: authData.username
        }
        const userResults = await select('users', userWhere)

        // Insert event
        const event = {
            id: null,
            title: req.body.title,
            date: req.body.date,
            startTime: req.body.start,
            endTime: req.body.end,
            recur: null,
            room: parseInt(req.body.room),
            user: userResults[0].id
        }
        const insertResults = await insert(event, 'events', ['id', 'date', 'startTime', 'endTime'])
        res.json({ results: insertResults })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// Update an event
router.post('/:id', async (req, res) => {
    try {
        // Validate availibility
        const eventWhere = {
            date: req.body.date,
            startTime: req.body.start,
            endTime: req.body.end,
        }
        const whereCompare = {
            startTime: '>',
            endTime: '<'
        }
        const eventResults = await select('events', eventWhere, 'AND', 
            undefined, undefined, whereCompare, 'OR')
        if(eventResults.length !== 0) {
            res.status(400).json({ msg: 'Room is unavailable during this time / date' })
        }
        
        // Get logged in user
        const token = req.cookies.token
        const authData = await jwt.verify(token, 'secret-key')
        const userWhere = {
            username: authData.username
        }
        const userResults = await select('users', userWhere)

        // Update event
        const event = [{
            'id': parseInt(req.params.id),
            'title': req.body.title,
            'date': req.body.date,
            'startTime': req.body.start,
            'endTime': req.body.end,
            'recur': null,
            'room': parseInt(req.body.room),
            'user': userResults[0].id
        }]
        const results = await update(event, 'events')
        res.json({ results })
    } catch(err) {
        res.status(400).json({ msg: err })
    }
})

// Delete an event
router.delete('/:id', async (req, res) => {
    try {
        const results = await remove([req.params.id], 'events', 'id')
        res.json({ results })
    } catch(err) {
        res.status(400).json({ msg: err })
    }
})

/*
create table recurs (
    id int not null,
    day int not null,
    end date not null,
    primary key (id));

create table events (
    id int not null auto_increment,
    title varchar(55) not null,
    date date not null,
    startTime time not null,
    endTime time not null,
    recur int,
    room int not null,
    user int,
    primary key (id),
    foreign key (recur) references recurs(id),
    foreign key (room) references rooms(id),
    foreign key (user) references users(id));
*/

module.exports = router