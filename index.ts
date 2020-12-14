import express from 'express'
import mongoose from 'mongoose'
import { readFileSync } from 'fs'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import config from './config'
import { selectUsers, addUser, updateUser, deleteUser } from './schema/user'
import {
  selectBuildings,
  addBuilding,
  updateBuilding,
  deleteBuilding
} from './schema/building'
import { selectRooms, addRoom, updateRoom, deleteRoom } from './schema/Room'
import {
  selectEvents,
  addEvent,
  updateEvent,
  deleteEvent
} from './schema/event'
;(async () => {
  try {
    let port = process.env.PORT || 5000

    const typeDefs: string = readFileSync('schema.graphql').toString()

    // Resolver map
    const resolvers = {
      Query: {
        selectUsers,
        selectBuildings,
        selectRooms,
        selectEvents
      },
      Mutation: {
        addUser,
        addBuilding,
        addRoom,
        addEvent,
        updateUser,
        updateBuilding,
        updateRoom,
        updateEvent,
        deleteUser,
        deleteBuilding,
        deleteRoom,
        deleteEvent
      }
    }

    const server: ApolloServer = new ApolloServer({ typeDefs, resolvers })

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
