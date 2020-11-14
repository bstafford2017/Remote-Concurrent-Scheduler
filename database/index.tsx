const mongo = require('mongoose')

mongo.connect(
  'mongodb://***yourusername***:***yourpassword***@ds053317.mlab.com:53317/gql-demo',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

mongo.connection.once('open', () => {
  console.log('Connected to MongoDB')
})
