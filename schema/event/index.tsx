import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import Event from '../../models/Event'
import Room from '../../models/Room'
import User from '../../models/User'
import BuildingType from '../building'
import RoomType from '../room'
import UserType from '../user'

const EventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    title: {
      type: GraphQLString
    },
    startDate: {
      type: GraphQLString
    },
    endDate: {
      type: GraphQLString
    },
    startTime: {
      type: GraphQLString
    },
    endTime: {
      type: GraphQLString
    },
    weekends: {
      type: new GraphQLList(GraphQLBoolean)
    },
    room: {
      type: RoomType,
      resolve(parent: any, args: any) {
        return Room.findById(args.id)
      }
    },
    createdBy: {
      type: UserType,
      resolve(parent: any, args: any) {
        return User.find({
          username: args.username
        })
      }
    }
  })
})

export const addEvent = {
  type: EventType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    startDate: { type: new GraphQLNonNull(GraphQLString) },
    endDate: { type: new GraphQLNonNull(GraphQLString) },
    startTime: { type: new GraphQLNonNull(GraphQLString) },
    endTime: { type: new GraphQLNonNull(GraphQLString) },
    weekends: { type: new GraphQLNonNull(new GraphQLList(GraphQLBoolean)) },
    room: { type: new GraphQLNonNull(RoomType) },
    createdBy: { type: new GraphQLNonNull(UserType) }
  },
  resolve(parent: any, args: any) {
    const event = new Event({
      title: args.title,
      startDate: args.startDate,
      endDate: args.endDate,
      startTime: args.startTime,
      endTime: args.endTime,
      weekends: args.weekends,
      room: args.room,
      createdBy: args.createdBy
    })
    return event.save()
  }
}

export const updateEvent = {}

export const removeEvent = {}

export default EventType
