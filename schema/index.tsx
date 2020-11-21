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

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: {
      type: UserType,
      args: {
        username: {
          type: GraphQLString
        }
      },
      resolve(parent: any, args: any) {
        return User.find({ username: args.username })
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
  fields: {}
})

export default new GraphQLSchema({
  query,
  mutation
})
