import graphql, { GraphQLSchema } from 'graphql'
import Building from '../models/Building'
import Room from '../models/Room'
import User from '../models/User'
import Event from '../models/Event'

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt
} = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    admin: {
      type: GraphQLBoolean
    }
  })
})

const BuildingType = new GraphQLObjectType({
  name: 'Building',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  })
})

const RoomType = new GraphQLObjectType({
  name: 'Room',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    number: {
      type: GraphQLString
    },
    seats: {
      type: GraphQLInt
    },
    projector: {
      type: GraphQLBoolean
    },
    building: {
      type: BuildingType,
      resolve(parent: any, args: any) {
        return Building.findById(parent.id)
      }
    }
  })
})

const EventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    id: {
      type: GraphQLString
    },
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
        return Room.findById(parent.id)
      }
    },
    createdBy: {
      type: UserType,
      resolve(parent: any, args: any) {
        return User.find({
          username: parent.username
        })
      }
    }
  })
})

const rootQuery = new GraphQLObjectType({
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
        return User.find({ username: parent.username })
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
        return Building.findById(parent.id)
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
        return Room.findById(parent.id)
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
        return Event.findById(parent.id)
      }
    }
  }
})

export default new GraphQLSchema({
  query: rootQuery
})
