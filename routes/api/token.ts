import jwt from 'jsonwebtoken'
import express from 'express'
import { log } from '../../utils'
import { IUser } from '../../client/src/types'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const token: string = req.cookies.token
    if (token) {
      const result: IUser = await jwt.verify(token, 'secret-key')
      res.json({ token: true })
    } else {
      res.json({ token: false })
    }
  } catch (err) {
    log('error-log', err.toString() + '\n')
    res.json({ token: false })
  }
})

export default router
