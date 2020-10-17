import express from 'express'
import { insert } from '../../lib/insert'
import { remove } from '../../lib/remove'
import { select, selectWithJoinAndWhere } from '../../lib/select'
import { update } from '../../lib/update'
import { filter, log } from '../../utils'
import { IRoom } from '../../client/src/types'

const router = express.Router()

// Get particular building's rooms
router.get('/:building', async (req, res) => {
  try {
    if (!req.params.building) {
      throw new Error('Please enter a valid building id')
    }

    const columns = ['rooms.id', 'number', 'seats', 'projector', 'name']
    const join = [
      {
        JOIN: 'buildings',
        building: 'buildings.id'
      }
    ]
    const where = {
      'buildings.id': parseInt(filter(req.params.building))
    }
    const results: IRoom[] = await selectWithJoinAndWhere(
      'rooms',
      columns,
      join,
      where,
      'OR'
    )
    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

router.post('/create', async (req, res) => {
  try {
    if (
      !req.body.number ||
      !req.body.seats ||
      !req.body.projector ||
      !req.body.building
    ) {
      throw new Error('Please fill out the entire create room form')
    }

    const room = [
      {
        id: null,
        number: filter(req.body.number),
        seats: parseInt(filter(req.body.seats)),
        projector: parseInt(filter(req.body.projector)),
        building: parseInt(filter(req.body.building))
      }
    ]
    let insertResults: IRoom = await insert('rooms', room)
    const columns = ['rooms.id', 'number', 'seats', 'projector', 'name']
    const join = [
      {
        JOIN: 'buildings',
        building: 'buildings.id'
      }
    ]
    const where = {
      'rooms.id': parseInt(filter(insertResults.id))
    }
    let selectResults: IRoom = await selectWithJoinAndWhere(
      'rooms',
      columns,
      join,
      where,
      'AND'
    )
    res.json({ results: selectResults[0] })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

router.post('/update', async (req, res) => {
  try {
    if (
      !req.body.number ||
      !req.body.seats ||
      !req.body.seats ||
      !req.body.projector
    ) {
      throw new Error('Please fill out the entire update form')
    }

    const room = [
      {
        id: parseInt(filter(req.body.id)),
        number: filter(req.body.number),
        seats: parseInt(filter(req.body.seats)),
        projector: parseInt(filter(req.body.projector))
      }
    ]
    const results: IRoom = await update('rooms', room)
    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

router.post('/delete', async (req, res) => {
  try {
    if (!req.body.id) {
      throw new Error('Please enter a valid room id to delete')
    }

    const room = [parseInt(filter(req.body.id))]
    const results: IRoom = await remove('rooms', room, 'id')
    res.json({ results })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

export default router
