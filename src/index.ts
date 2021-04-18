import 'reflect-metadata'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'
import config from './config'
import BuildingResolver from './resolvers/building.resolver'
import RoomResolver from './resolvers/room.resolver'
import UserResolver from './resolvers/user.resolver'
import EventResolver from './resolvers/event.resolver'
import { buildSchema } from 'type-graphql'
import { isAuthenticated } from './services/user'
import cookieParser from 'cookie-parser'
import log from './config/logger'
;(async () => {
  try {
    log.info('Loading environment variables')
    const result = dotenv.config()
    if (result.error) {
      log.info('Failed to load environment variables')
    }
    log.info('Loaded environment variables')
    let port = process.env.PORT || 5000

    const schema = await buildSchema({
      resolvers: [BuildingResolver, RoomResolver, UserResolver, EventResolver],
      authChecker: isAuthenticated
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

    log.info('MongoDB connected...')

    app.use(cookieParser())

    server.applyMiddleware({
      app,
      path: '/graphql',
      cors: {
        credentials: true,
        origin: true
      }
    })

    app.listen(port)

    log.info(`Server listening on port ${port}`)
  } catch (e) {
    console.error(e)
  }
})()
