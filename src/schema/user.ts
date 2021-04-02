import mongoose from 'mongoose'
import User, { UserModel } from '../models/User'

// TODO: add bcrypt
export const selectUser = async (_, { username, password }): Promise<User> => {
  try {
    console.log(`Selecting username=${username} and password=${password}`)
    const response: User = await UserModel.findOne({ username, password })
    console.log(`Selected response=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const selectUsers = async (): Promise<User[]> => {
  try {
    console.log(`Selecting all users`)
    const response: User[] = await UserModel.find()
    console.log(`Selected response=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const addUser = async (_, { input }): Promise<User> => {
  try {
    const username: string = input.username
    console.log(`Looking for username=${username}`)
    const user: User = await UserModel.findOne({ username })
    console.log(`Selected for UserModel=${JSON.stringify(user)}`)

    if (user) {
      console.log(`UserModel already exists for username=${username}`)
      return
    }

    console.log(`Adding UserModel=${JSON.stringify(input)}`)
    const newUser: User = await new UserModel({
      _id: mongoose.Types.ObjectId(),
      username: input.username,
      password: input.password,
      firstName: input.firstName,
      lastName: input.lastName,
      admin: input.admin,
      events: []
    }).save()
    console.log(`Added UserModel=${JSON.stringify(newUser)}`)
    return newUser
  } catch (e) {
    console.log(e)
  }
}

export const updateUser = async (_, { input }): Promise<User> => {
  try {
    const username: string = input.username
    console.log(`Looking for username=${username}`)
    const user: User = await UserModel.findOne({ username })
    console.log(`Selected for UserModel=${JSON.stringify(user)}`)

    if (user) {
      console.log(`UserModel already exists for username=${username}`)
      return
    }

    console.log(`Updating UserModel=${JSON.stringify(input)}`)
    const response: User = await UserModel.updateOne(
      { _id: input.id },
      {
        username: input.username,
        password: input.password,
        firstName: input.firstName,
        lastName: input.lastName,
        admin: input.admin
      }
    )
    console.log(`Updated UserModel=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const deleteUser = async (_, id: string): Promise<User> => {
  try {
    console.log(`Removing userId=${id}`)
    const response: User = await UserModel.findByIdAndDelete(id)
    console.log(`Removed UserModel=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const resolveUser = async ({
  UserModel: { username }
}): Promise<User> => {
  console.log(`Selecting username=${username}`)
  const response: User = await UserModel.findById(username)
  console.log(`Selected UserModel=${JSON.stringify(response)}`)
  return response
}
