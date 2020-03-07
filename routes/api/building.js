const express = require('express')
const insert = require('../../lib/insert')
const remove = require('../../lib/remove')
const select = require('../../lib/select')
const update = require('../../lib/update')
const router = express.Router()

// Get all buildings
router.get('/', (req, res) => {
    select('buildings').then(results => {
        res.json({ results })
    }).catch(err => {
        res.status(400).json({ msg: err })
    })
})

// Create a building
router.post('/create', (req, res) => {
    const building = {
        id: null,
        name: req.body.name
    }
    insert(building, 'buildings').then(results => {
        res.json({ results })
    }).catch(err => {
        res.status(400).json({ msg: err })
    })
})

// Update a building
router.post('/update', (req, res) => {
    update(req.body.names, 'buildings').then(results => {
        res.json({ results })
    }).catch(err => {
        res.status(400).json({ msg: err })
    })
})

// Delete a building
router.post('/delete', (req, res) => {
    remove(req.body.ids, 'buildings', 'id').then(results => {
        res.json({ results })
    }).catch(err => {
        res.status(400).json({ msg: err })
    })
})

/*
create table buildings(
    id int not null auto_increment,
    name varchar(55) not null unique,
    primary key(id));
*/

module.exports = router