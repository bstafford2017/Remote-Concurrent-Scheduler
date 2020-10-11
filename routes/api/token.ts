import jwt from 'jsonwebtoken'
import express from 'express'
import log from '../../utils/log'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const token = req.cookies.token
    if (token) {
      const result = await jwt.verify(token, 'secret-key')
      res.json({ token: true })
    } else {
      res.json({ token: false })
    }
  } catch (err) {
    log('error-log', err.tostring() + '\n')
    res.json({ token: false })
  }
})

export default router
