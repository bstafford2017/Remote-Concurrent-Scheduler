import express from 'express'
import logger from './utils/logger'
import tokenRoutes from './routes/api/token'
import eventRoutes from './routes/api/event'
import userRoutes from './routes/api/user'
import buildingRoutes from './routes/api/building'
import roomRoutes from './routes/api/room'

const app: any = express()

// Middleware for body parsing for POST
app.use(express.urlencoded({ extended: true }))

// Middleware for parsing JSON
app.use(express.json())

// Middleware for logging requests
app.use(logger)

// Routes for API
app.use('/api/token', tokenRoutes)
app.use('/api/event', eventRoutes)
app.use('/api/user', userRoutes)
app.use('/api/building', buildingRoutes)
app.use('/api/room', roomRoutes)

// Catch 404
app.use((req: express.Request, res: express.Response) => {
  res.sendStatus(404)
})

let port = process.env.PORT || 5000

// Listen for request
app.listen(port, () => console.log(`Server started on port ${port}`))
