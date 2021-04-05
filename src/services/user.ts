import mongoose from 'mongoose'
import User, { UserModel } from '../models/User'
import log from '../config/logger'

// TODO: add bcrypt
export const selectUser = async (
  username: string,
  password: string
): Promise<User> => {
  try {
    log.info(`Selecting username=${username} and password=${password}`)
    const response: User = await UserModel.findOne({ username, password })
    log.info(`Selected response=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    log.error(`Error selecting user exception=${e}`)
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
    const response: any = await UserModel.updateOne(
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
    const response: User = await UserModel.findByIdAndRemove(id)
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
