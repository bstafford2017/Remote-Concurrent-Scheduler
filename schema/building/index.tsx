import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import Building from '../../models/Building'

const BuildingType = new GraphQLObjectType({
  name: 'Building',
  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
})

export const addBuilding = {
  type: BuildingType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent: any, args: any) {
    const building = new Building({
      name: args.name
    })
    return building.save()
  }
}

export const updateBuilding = {}

export const removeBuilding = {
  type: BuildingType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent: any, args: any) {
    return Building.findByIdAndDelete(args.id)
  }
}

export default BuildingType
