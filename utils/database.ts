import mysql from 'mysql'
import log from './log'

// Create connection
const database = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'rcs'
})

// Connect to database
database.connect((err: Error) => {
  err ? log('error-log', err.toString()) : console.log('MySQL connected...')
})

export default database
