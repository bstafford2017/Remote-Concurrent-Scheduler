import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import User from '../../models/User'

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

export const addUser = {
  type: UserType,
  args: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    admin: { type: new GraphQLNonNull(GraphQLBoolean) }
  },
  resolve(parent: any, args: any) {
    const user = new User({
      username: args.username,
      password: args.password,
      firstName: args.firstName,
      lastName: args.lastName,
      admin: args.admin,
      events: []
    })
    return user.save()
  }
}

export const updateUser = {}

export const removeUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent: any, args: any) {
    return User.findByIdAndDelete(args.id)
  }
}

export default UserType
