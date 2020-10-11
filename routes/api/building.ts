import express from 'express'
import insert from '../../lib/insert'
import remove from '../../lib/remove'
import select from '../../lib/select'
import update from '../../lib/update'
import filter from '../../utils/filter'
import log from '../../utils/log'

const router = express.Router()

// Get all buildings
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    res.json({ results: await select('buildings') })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Create a building
router.post('/create', async (req: express.Request, res: express.Response) => {
  try {
    // Input validation
    if (!req.body.name) {
      throw new Error('Please enter a valid building name')
    }

    const building = {
      id: null,
      name: filter(req.body.name)
    }
    res.json({ results: await insert(building, 'buildings') })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Update a building
router.post('/update', async (req: express.Request, res: express.Response) => {
  try {
    // Input validation
    if (!req.body.names) {
      throw new Error('Please select a building to modify')
    }

    const names = req.body.names.map((name) => {
      return {
        id: parseInt(filter(name.id)),
        name: filter(name.name)
      }
    })
    res.json({ results: await update(names, 'buildings') })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

// Delete a building
router.post('/delete', async (req: express.Request, res: express.Response) => {
  try {
    // Input validation
    if (!req.body.ids) {
      throw new Error('Please select a building to modify')
    }

    const ids = req.body.ids.map((id) => {
      return parseInt(filter(id))
    })
    res.json({ results: await remove(ids, 'buildings', 'id') })
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.status(400).json({ msg: err.toString() })
  }
})

export default router
