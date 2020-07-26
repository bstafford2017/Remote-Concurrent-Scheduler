const express = require('express')
const parser = require('cookie-parser')
const logger = require('./utils/logger')
const verifyToken = require('./utils/verifyToken')
const verifyAdmin = require('./utils/verifyAdmin')
const obfuscate = require('./utils/obfuscate')
const dump = require('./utils/dump')

const app = express()

// Middleware for body parsing for POST
app.use(express.urlencoded({ extended: true }))

// Middleware for parsing JSON
app.use(express.json())

// Middleware for logging requests
app.use(logger)

// Middleware for cookie passing
app.use(parser())

// Middleware for verifying token
app.use(
  [
    '/calendar.html',
    '/manageBuildings.html',
    '/manageRooms.html',
    '/manageUsers.html',
    '/settings.html',
    '/search.html'
  ],
  verifyToken
)

// Middleware for verifying admin
app.use(
  ['/manageBuildings.html', '/manageRooms.html', '/manageUsers.html'],
  verifyAdmin
)

// Middleware for obfuscating javascript
app.use('/js', obfuscate)

// Routes for API
app.use('/api/token', require('./routes/api/token'))
app.use('/api/event', require('./routes/api/event'))
app.use('/api/user', require('./routes/api/user'))
app.use('/api/building', require('./routes/api/building'))
app.use('/api/room', require('./routes/api/room'))

// Catch 404
app.use((req, res, next) => {
  res.redirect('/error.html')
})

let port = process.env.PORT || 5000

// Listen for request
app.listen(port, () => console.log(`Server started on port ${port}`))
