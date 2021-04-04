import 'reflect-metadata'
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import config from './config'
import BuildingResolver from './resolvers/building.resolver'
import RoomResolver from './resolvers/room.resolver'
import UserResolver from './resolvers/user.resolver'
import EventResolver from './resolvers/event.resolver'
import { buildSchema } from 'type-graphql'
;(async () => {
  try {
    let port = process.env.PORT || 5000

    const schema = await buildSchema({
      resolvers: [BuildingResolver, RoomResolver, UserResolver, EventResolver],
      nullableByDefault: false
    })

    const server: ApolloServer = new ApolloServer({
      schema,
      playground: true,
      context: ({ req: Request, res: Response }) => ({
        req: Request,
        res: Response
      })
    })

    const app: express.Application = express()

    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    console.log('MongoDB connected...')

    server.applyMiddleware({ app, path: '/graphql' })

    app.use(cors())
    app.listen(port)

    console.log(`Server listening on port ${port}`)
  } catch (e) {
    console.error(e)
  }
})()
