import express from 'express'
import connection from '../../utils/database'
import { insert } from '../../lib/insert'
import { remove } from '../../lib/remove'
import {
  select,
  selectWithWhere,
  selectWithJoinAndWhere
} from '../../lib/select'
import { update } from '../../lib/update'
import { log } from '../../utils'
import jwt from 'jsonwebtoken'
import { IUser } from '../../client/src/types/index'

const router = express.Router()

// Get particular user by token
router.get('/', async (req, res) => {
  try {
    const token = req.header('x-auth-token')
    log('log.txt', `token=${req.header('x-auth-token')}`, false)

    if (!token) {
      return res.sendStatus(401)
    }
    const jwtResults: IUser = await jwt.verify(token, 'secret-key')
    if (!jwtResults) {
      return res.sendStatus(401)
    }
    const where = {
      username: connection.escape(jwtResults.username)
    }
    const results: IUser[] = await selectWithWhere('users', [], where, 'AND')
    res.json({ results: results[0] })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Get particular user by login
router.post('/login', async (req, res) => {
  try {
    // Input validation
    if (!req.body.username || !req.body.password) {
      throw new Error('Please fill out the entire login form')
    }

    const where = {
      username: connection.escape(req.body.username),
      password: connection.escape(req.body.password)
    }
    const results: IUser[] = await selectWithWhere('users', [], where, 'AND')
    if (results.length === 0) {
      return res.sendStatus(401)
    }

    if (
      results[0].username === req.body.username &&
      results[0].password === req.body.password
    ) {
      try {
        const token = await jwt.sign(
          { username: where.username },
          'secret-key',
          { expiresIn: '24h' }
        )
        return res.json({ token })
      } catch (err) {
        console.log(err)
        return res.status(401).json({ msg: err.toString() })
      }
    } else {
      return res.sendStatus(401)
    }
  } catch (err) {
    log('error-log', err.toString() + '\n')
    return res.status(400).json({ msg: err.toString() })
  }
})

// Get all users
router.get('/', async (req, res) => {
  try {
    const results = await select('users', [])
    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Check if user is admin
router.get('/admin', async (req, res) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.redirect('/login.html')
    }

    const verifyResults: IUser = await jwt.verify(token, 'secret-key')
    if (!verifyResults) {
      return res.redirect('/login.html')
    }
    const where = {
      username: connection.escape(verifyResults.username)
    }
    const results: IUser[] = await selectWithWhere('users', [], where, 'AND')
    if (results.length === 0) {
      return res.redirect('/login.html')
    }
    if (results[0].admin === 1) {
      res.json({ admin: 'true' })
    } else {
      res.json({ admin: 'false' })
    }
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Create a user
router.post('/create', async (req, res) => {
  try {
    // Input validation
    if (
      !req.body.username ||
      !req.body.password ||
      !req.body.fname ||
      !req.body.lname ||
      !req.body.admin
    ) {
      throw new Error('Please fill out the entire create user form')
    }

    const user = [
      {
        id: null,
        username: connection.escape(req.body.username),
        password: connection.escape(req.body.password),
        fname: connection.escape(req.body.fname),
        lname: connection.escape(req.body.lname),
        admin: parseInt(connection.escape(req.body.admin))
      }
    ]
    const results = await insert('users', user)
    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Update a user
router.post('/update', async (req, res) => {
  try {
    // Input validation
    if (
      !req.body.id ||
      !req.body.username ||
      !req.body.password ||
      !req.body.fname ||
      !req.body.lname
    ) {
      throw new Error('Please fill out the entire update user form')
    }

    const user = [
      {
        id: parseInt(connection.escape(req.body.id)),
        username: connection.escape(req.body.username),
        password: connection.escape(req.body.password),
        fname: connection.escape(req.body.fname),
        lname: connection.escape(req.body.lname)
      }
    ]
    let results: IUser = await update('users', user)

    // If < 1 admin, create an admin
    const adminWhere = {
      admin: '1'
    }
    const adminResults: IUser[] = await selectWithWhere(
      'users',
      [],
      adminWhere,
      'AND'
    )
    if (adminResults.length < 1) {
      const admin = [
        {
          id: null,
          username: 'admin',
          password: 'Scheduler2019',
          fname: 'admin',
          lname: 'admin',
          admin: 1
        }
      ]
      results = [...results, await insert('users', admin)]
    }

    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Delete a user
router.post('/delete', async (req, res) => {
  try {
    // Input validation
    if (!req.body.id) {
      throw new Error('Please enter a valid user id to delete')
    }

    // Check if deleting logged in account
    const token = req.cookies.token
    let tokenResults: any = {}
    if (token) {
      const results: IUser = await jwt.verify(token, 'secret-key')
      const userWhere = {
        username: results.username
      }
      tokenResults = await selectWithWhere('users', [], userWhere, 'AND')
    }
    if (req.body.id == tokenResults[0].id) {
      throw new Error('Cannot delete logged in account')
    }

    // Check if user has create events
    const eventsWhere = {
      'users.id': parseInt(connection.escape(req.body.id))
    }
    const eventsJoin = [
      {
        join: 'events',
        'events.user': 'users.id'
      }
    ]
    const eventsResults = await selectWithJoinAndWhere(
      'users',
      ['users.id'],
      eventsJoin,
      eventsWhere,
      'AND'
    )
    console.log(JSON.stringify(eventsResults) + ' ' + req.body.id)
    if (eventsResults.length > 0) {
      throw new Error('Cannot delete user with created events')
    }

    const id = [parseInt(connection.escape(req.body.id))]
    let results = await remove('users', id, 'id')

    // If < 1 admin, create an admin
    const adminWhere = {
      admin: '1'
    }
    const adminResults = await selectWithWhere('users', [], adminWhere, 'AND')
    if (adminResults.length < 1) {
      const admin = [
        {
          id: null,
          username: 'admin',
          password: 'Scheduler2019',
          fname: 'admin',
          lname: 'admin',
          admin: 1
        }
      ]
      results = [...results, await insert('users', admin)]
    }

    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

export default router
