import express from 'express'
import mongoose from 'mongoose'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
import config from './config'
;(async () => {
  try {
    const app: express.Application = express()

    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    app.use('/graphiql', graphqlHTTP({ schema, graphiql: true }))

    let port = process.env.PORT || 5000
    app.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (e) {
    console.error(e)
  }
})()
