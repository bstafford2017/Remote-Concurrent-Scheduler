import express from 'express'
import mongoose from 'mongoose'
import { graphqlHTTP } from 'express-graphql'
import config from './config'
import schema from './schema'
;(async () => {
  try {
    const app: express.Application = express()

    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    console.log('MongoDB connected...')

    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true
      })
    )

    let port = process.env.PORT || 5000
    app.listen(port)

    console.log(`Server listening on port ${port}`)
  } catch (e) {
    console.error(e)
  }
})()
