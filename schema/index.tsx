import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import Building from '../models/Building'
import Room from '../models/Room'
import User from '../models/User'
import Event from '../models/Event'

import UserType from './user'
import BuildingType from './building'
import RoomType from './room'
import EventType from './event'

import { addUser, updateUser, removeUser } from './user'
import { addBuilding, updateBuilding, removeBuilding } from './building'
import { addRoom, updateRoom, removeRoom } from './room'
import { addEvent, updateEvent, removeEvent } from './event'

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent: any, args: any) {
        return User.findById(args.id)
      }
    },
    building: {
      type: BuildingType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent: any, args: any) {
        return Building.findById(args.id)
      }
    },
    room: {
      type: RoomType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent: any, args: any) {
        return Room.findById(args.id)
      }
    },
    event: {
      type: EventType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent: any, args: any) {
        return Event.findById(args.id)
      }
    }
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    removeUser,
    addBuilding,
    removeBuilding,
    addRoom,
    removeRoom,
    addEvent,
    removeEvent
  }
})

export default new GraphQLSchema({
  query,
  mutation
})
