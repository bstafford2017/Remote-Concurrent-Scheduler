import express from 'express'
import connection from '../../utils/database'
import { insert } from '../../lib/insert'
import { remove } from '../../lib/remove'
import { select } from '../../lib/select'
import { update } from '../../lib/update'
import { log } from '../../utils'
import { IBuilding } from '../../client/src/types'

const router = express.Router()

// Get all buildings
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    res.json({ results: await select('buildings', []) })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Create a building
router.post('/create', async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.name) {
      throw new Error('Please enter a valid building name')
    }

    const building = [
      {
        id: null,
        name: connection.escape(req.body.name)
      }
    ]
    res.json({ results: await insert('buildings', building) })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Update a building
router.post('/update', async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.names) {
      throw new Error('Please select a building to modify')
    }

    const names: IBuilding[] = req.body.names.map((name: IBuilding) => {
      return {
        id: parseInt(connection.escape(name.id)),
        name: connection.escape(name.name)
      }
    })
    res.json({ results: await update('buildings', names) })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Delete a building
router.post('/delete', async (req: express.Request, res: express.Response) => {
  try {
    if (!req.body.ids) {
      throw new Error('Please select a building to modify')
    }

    const ids: number[] = req.body.ids.map((id: string) => {
      return parseInt(connection.escape(id))
    })
    res.json({ results: await remove('buildings', ids, 'id') })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

export default router
