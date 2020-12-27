import express from 'express'
import mongoose from 'mongoose'
import { readFileSync } from 'fs'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import config from './config'
import {
  selectUser,
  selectUsers,
  addUser,
  updateUser,
  deleteUser,
  resolveUser
} from './schema/user'
import {
  selectBuilding,
  selectBuildings,
  addBuilding,
  updateBuilding,
  deleteBuilding,
  resolveBuilding
} from './schema/building'
import {
  selectRoom,
  selectRooms,
  addRoom,
  updateRoom,
  deleteRoom,
  resolveRoom
} from './schema/Room'
import {
  selectEvent,
  selectEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  resolveEvents
} from './schema/event'
;(async () => {
  try {
    let port = process.env.PORT || 5000

    const typeDefs: string = readFileSync('schema.graphql').toString()

    // Resolver map
    const resolvers = {
      Query: {
        selectUser,
        selectUsers,
        selectBuilding,
        selectBuildings,
        selectRoom,
        selectRooms,
        selectEvent,
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
      },
      Room: {
        building: resolveBuilding
      },
      Event: {
        createdBy: resolveUser,
        room: resolveRoom
      },
      User: {
        events: resolveEvents
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
