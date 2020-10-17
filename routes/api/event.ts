import express from 'express'
import connection from '../../utils/database'
import { insert } from '../../lib/insert'
import { remove } from '../../lib/remove'
import { select, selectWithJoinAndWhere } from '../../lib/select'
import { update } from '../../lib/update'
import { log } from '../../utils'
import jwt from 'jsonwebtoken'
import { IEvent } from '../../client/src/types'
import { IUser } from '../../client/src/types'
import { IRecur } from '../../client/src/types'

const router = express.Router()

function getWeekString(day: number) {
  switch (day) {
    case 0:
      return '1______'
    case 1:
      return '_1_____'
    case 2:
      return '__1____'
    case 3:
      return '___1___'
    case 4:
      return '____1__'
    case 5:
      return '_____1_'
    case 6:
      return '______1'
    default:
      throw new Error('Please enter valid input')
  }
}

// Get all events
router.get('/:search', async (req: express.Request, res: express.Response) => {
  try {
    if (!req.params.search) {
      throw new Error('Please enter a valid search')
    }

    const cols = [
      'events.id',
      'events.title',
      'events.date',
      'events.startTime',
      'events.endTime',
      'buildings.name',
      'rooms.number',
      'users.username',
      'recurs.weekdays',
      'recurs.end'
    ]
    const join = [
      {
        JOIN: 'users',
        user: 'users.id'
      },
      {
        JOIN: 'rooms',
        room: 'rooms.id'
      },
      {
        'LEFT OUTER JOIN': 'recurs',
        recur: 'recurs.id'
      },
      {
        JOIN: 'buildings',
        'rooms.building': 'buildings.id'
      }
    ]
    const where = {
      title: connection.escape(req.params.search),
      'rooms.number': connection.escape(req.params.search),
      'buildings.name': connection.escape(req.params.search),
      'users.username': connection.escape(req.params.search),
      date: connection.escape(req.params.search)
    }
    const results: IEvent[] = await selectWithJoinAndWhere(
      'events',
      [],
      join,
      where,
      'OR'
    )
    results.sort((a, b) => {
      return a.date - b.date
    })
    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Get particular month's events
router.get(
  '/:year/:month',
  async (req: express.Request, res: express.Response) => {
    try {
      if (!req.params.year || !req.params.month) {
        throw new Error('Please enter a valid year and month')
      }

      let results: IEvent = [[]]
      const date = new Date(
        parseInt(req.params.year),
        parseInt(req.params.month) - 1,
        1,
        0,
        0,
        1
      )
      for (let i = 0; i < date.getDate(); i++) {
        results[i] = []
        const formattedDate = date.toISOString().split('T')[0]
        const cols = [
          'events.id',
          'events.title',
          'events.date',
          'events.startTime',
          'events.endTime',
          'buildings.name',
          'rooms.number',
          'events.room',
          'recurs.end',
          'recurs.weekdays',
          'recurs.id AS recurId'
        ]
        const join = [
          {
            join: 'rooms',
            'events.room': 'rooms.id'
          },
          {
            join: 'buildings',
            'rooms.building': 'buildings.id'
          },
          {
            'left join': 'recurs',
            'events.recur': 'recurs.id'
          }
        ]
        const matchWeek = getWeekString(date.getDay())
        let where = {}
        if (req.body.room && req.body.building) {
          where = {
            'events.date': formattedDate,
            'recurs.weekdays': matchWeek,
            'recurs.end': formattedDate,
            date: formattedDate,
            'buildings.name': connection.escape(req.body.building),
            'rooms.number': connection.escape(req.body.room)
          }
        } else {
          where = {
            'events.date': formattedDate,
            'recurs.weekdays': matchWeek,
            'recurs.end': formattedDate,
            date: formattedDate
          }
        }
        const whereCompare = {
          'recurs.end': '>=',
          date: '<='
        }
        const selectResults: IEvent[] = await selectWithJoinAndWhere(
          'events',
          cols,
          join,
          where,
          'OR'
        )
        for (let j = 0; j < selectResults.length; j++) {
          if (j == 0) {
            results[i] = [selectResults[j]]
          } else {
            results[i] = [...results[i], selectResults[j]]
          }
        }
        date.setDate(date.getDate() + 1)
      }
      res.json({ results })
    } catch (err) {
      log('error-log', err.toString() + '\n')
      res.status(400).json({ msg: err.toString() })
    }
  }
)

// Get particular day's events
router.post(
  '/:year/:month/:day',
  async (req: express.Request, res: express.Response) => {
    try {
      if (!req.params.year || !req.params.month || !req.params.day) {
        throw new Error('Please enter a valid year, month and day')
      }

      const cols = [
        'events.id',
        'events.title',
        'events.date',
        'events.startTime',
        'events.endTime',
        'buildings.name',
        'rooms.number',
        'events.room',
        'recurs.end',
        'recurs.weekdays',
        'recurs.id AS recurId'
      ]
      const join = [
        {
          join: 'rooms',
          'events.room': 'rooms.id'
        },
        {
          join: 'buildings',
          'rooms.building': 'buildings.id'
        },
        {
          'left join': 'recurs',
          'events.recur': 'recurs.id'
        }
      ]
      const date = new Date(
        `${req.params.year}-${req.params.month}-${req.params.day}T00:00:01`
      )
      const matchWeek = getWeekString(date.getDay())
      let where = {
        'events.date': `${req.params.year}-${req.params.month}-${req.params.day}`,
        'recurs.weekdays': matchWeek,
        'recurs.end': `${req.params.year}-${req.params.month}-${req.params.day}`,
        date: `${req.params.year}-${req.params.month}-${req.params.day}`
      }
      const whereCompare = {
        'recurs.end': '>=',
        date: '<='
      }
      let results: IEvent[] = await selectWithJoinAndWhere(
        'events',
        cols,
        join,
        where,
        'OR'
      )

      // connection.escape out results because of complex query
      if (req.body.room && req.body.building) {
        results = results.filter(
          (row: IEvent) =>
            row.name === req.body.building && row.number === req.body.room
        )
      }
      res.json({ results })
    } catch (err) {
      log('error-log', err.toString() + '\n')
      res.status(400).json({ msg: err.toString() })
    }
  }
)

// Create an event
router.post('/create', async (req: express.Request, res: express.Response) => {
  try {
    // Input validation
    if (
      !req.body.title ||
      !req.body.date ||
      !req.body.start ||
      !req.body.end ||
      !req.body.room
    ) {
      throw new Error('Please fill out entire create event form')
    }

    // Validate availibility
    const cols = [
      'events.id',
      'events.title',
      'events.date',
      'events.startTime',
      'events.endTime',
      'buildings.name',
      'rooms.number',
      'events.room',
      'recurs.end',
      'recurs.weekdays',
      'recurs.id AS recurId'
    ]
    const join = [
      {
        join: 'rooms',
        'events.room': 'rooms.id'
      },
      {
        join: 'buildings',
        'rooms.building': 'buildings.id'
      },
      {
        'left join': 'recurs',
        'events.recur': 'recurs.id'
      }
    ]
    const date = new Date(`${req.body.date}T00:00:01`)
    const matchWeek = getWeekString(date.getDay())

    // For getting a regular event that overlap
    const where1 = {
      'events.date': connection.escape(req.body.date),
      room: parseInt(connection.escape(req.body.room)),
      startTime: connection.escape(req.body.end),
      endTime: connection.escape(req.body.start)
    }
    const whereCompare1 = {
      startTime: '<',
      endTime: '>'
    }
    const eventResults1 = await selectWithJoinAndWhere(
      'events',
      cols,
      join,
      where1,
      'AND'
    )

    // For gettings recurring events that overlap
    const where2 = {
      'recurs.weekdays': connection.escape(matchWeek),
      room: parseInt(connection.escape(req.body.room)),
      'recurs.end': connection.escape(req.body.date),
      date: connection.escape(req.body.date),
      startTime: connection.escape(req.body.end),
      endTime: connection.escape(req.body.start)
    }
    const whereCompare2 = {
      'recurs.end': '>=',
      date: '<=',
      startTime: '<',
      endTime: '>'
    }
    const eventResults2: IEvent[] = await selectWithJoinAndWhere(
      'events',
      cols,
      join,
      where2,
      'AND'
    )
    const fullEventResults = eventResults1.concat(eventResults2)
    if (fullEventResults.length !== 0) {
      res
        .status(400)
        .json({ msg: 'Room is unavailable during this time / date' })
      return
    }

    // Insert recur
    let recurInsertResults = null
    if (req.body.weekString && req.body.endRecur) {
      const recur = [
        {
          id: null,
          weekdays: connection.escape(req.body.weekString),
          end: connection.escape(req.body.endRecur)
        }
      ]
      recurInsertResults = await insert('recurs', recur)
    }

    // Get logged in user
    const token = req.cookies.token
    const authData: IUser = await jwt.verify(token, 'secret-key')
    const userWhere: any = {
      username: authData.username
    }
    const userResults: IUser[] = await select('users', userWhere)

    // Insert event
    const event = [
      {
        id: null,
        title: connection.escape(req.body.title),
        date: connection.escape(req.body.date),
        startTime: connection.escape(req.body.start),
        endTime: connection.escape(req.body.end),
        recur: recurInsertResults
          ? parseInt(connection.escape(recurInsertResults.id))
          : null,
        room: parseInt(connection.escape(req.body.room)),
        user: parseInt(connection.escape(userResults[0].id))
      }
    ]
    const insertResults: IEvent[] = await insert('events', event)
    res.json({ results: insertResults })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Update an event
router.post('/update', async (req: express.Request, res: express.Response) => {
  try {
    if (
      !req.body.id ||
      !req.body.title ||
      !req.body.date ||
      !req.body.start ||
      !req.body.end ||
      !req.body.room
    ) {
      throw new Error('Please fill out the entire update event form')
    }

    // Validate availibility
    const cols = [
      'events.id',
      'events.title',
      'events.date',
      'events.startTime',
      'events.endTime',
      'buildings.name',
      'rooms.number',
      'events.room',
      'recurs.end',
      'recurs.weekdays',
      'recurs.id AS recurId'
    ]
    const join = [
      {
        join: 'rooms',
        'events.room': 'rooms.id'
      },
      {
        join: 'buildings',
        'rooms.building': 'buildings.id'
      },
      {
        'left join': 'recurs',
        'events.recur': 'recurs.id'
      }
    ]
    const date = new Date(`${req.body.date}T00:00:01`)
    const matchWeek = getWeekString(date.getDay())
    // For getting a regular event that overlap
    const where1 = {
      'events.date': connection.escape(req.body.date),
      room: parseInt(connection.escape(req.body.room)),
      startTime: connection.escape(req.body.end),
      endTime: connection.escape(req.body.start)
    }
    const whereCompare1 = {
      room: '!=',
      startTime: '<',
      endTime: '>'
    }
    const eventResults1: IEvent[] = await selectWithJoinAndWhere(
      'events',
      cols,
      join,
      where1,
      'AND'
    )
    // For gettings recurring events that overlap
    const where2 = {
      'events.date': connection.escape(req.body.date),
      room: parseInt(connection.escape(req.body.room)),
      'recurs.weekdays': connection.escape(matchWeek),
      'events.id': parseInt(connection.escape(req.body.id)),
      'recurs.end': connection.escape(req.body.date),
      date: connection.escape(req.body.date),
      startTime: connection.escape(req.body.start),
      endTime: connection.escape(req.body.end)
    }
    const whereCompare2 = {
      room: '!=',
      'recurs.end': '>=',
      date: '<=',
      'events.id': '!=',
      startTime: '>',
      endTime: '<'
    }
    const eventResults2: IEvent[] = await selectWithJoinAndWhere(
      'events',
      cols,
      join,
      where2,
      'AND'
    )
    const fullEventResults = eventResults1.concat(eventResults2)
    if (fullEventResults.length !== 0) {
      res
        .status(400)
        .json({ msg: 'Room is unavailable during this time / date' })
      return
    }

    if (req.body.recurId && req.body.weekString && req.body.end) {
      // Update recur
      const recur = [
        {
          'recurs.id': parseInt(connection.escape(req.body.recurId)),
          'recurs.weekdays': connection.escape(req.body.weekString),
          'recurs.end': connection.escape(req.body.endRecur)
        }
      ]
      const recurInsertResults: IRecur[] = await update('recurs', recur)
    }

    // Get logged in user
    const token = req.cookies.token
    const authData: IUser = await jwt.verify(token, 'secret-key')
    const userWhere: any = {
      username: authData.username
    }
    const userResults: IUser[] = await select('users', userWhere)

    // Update event
    const event = [
      {
        id: parseInt(connection.escape(req.body.id)),
        title: connection.escape(req.body.title),
        date: connection.escape(req.body.date),
        startTime: connection.escape(req.body.start),
        endTime: connection.escape(req.body.end),
        recur: req.body.recurId
          ? parseInt(connection.escape(req.body.recurId))
          : null,
        room: parseInt(connection.escape(req.body.room)),
        user: parseInt(connection.escape(userResults[0].id))
      }
    ]
    const results: IEvent[] = await update('events', event)
    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Delete an event
router.post('/delete', async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.id) {
      throw new Error('Please enter a valid event id to delete')
    }

    const results = await remove(
      'events',
      [parseInt(connection.escape(req.body.id))],
      'id'
    )
    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

export default router
