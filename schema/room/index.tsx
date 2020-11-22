import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import Room from '../../models/Room'
import Building from '../../models/Building'
import BuildingType from '../building'
import { BuildingInputType } from '../building'

const RoomType = new GraphQLObjectType({
  name: 'Room',
  fields: () => ({
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
        return Building.findById(args.id)
      }
    }
  })
})

export const RoomInputType = new GraphQLInputObjectType({
  name: 'RoomInput',
  fields: () => ({
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
      type: BuildingInputType
    }
  })
})

export const addRoom = {
  type: RoomType,
  args: {
    number: { type: new GraphQLNonNull(GraphQLString) },
    seats: { type: new GraphQLNonNull(GraphQLInt) },
    projector: { type: new GraphQLNonNull(GraphQLBoolean) },
    building: { type: new GraphQLNonNull(BuildingInputType) }
  },
  resolve(parent: any, args: any) {
    const room = new Room({
      number: args.number,
      seats: args.seats,
      projector: args.projector,
      building: args.building
    })
    return room.save()
  }
}

export const updateRoom = {}

export const removeRoom = {
  type: RoomType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent: any, args: any) {
    return Room.findByIdAndDelete(args.id)
  }
}

export default RoomType
