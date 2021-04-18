import mongoose from 'mongoose'
import User, { UserModel } from '../models/User'
import log from '../config/logger'
import Context from '../context'
import jwt from 'jsonwebtoken'

interface Params {
  context: Context
}

const nullUser: User = {
  id: null,
  username: null,
  password: null,
  fname: null,
  lname: null,
  admin: null
}

export const isAuthenticated = ({ context }: Params): boolean => {
  log.info(`Attempting authentication`)
  const token = context.req.cookies.token
  if (!token) {
    log.info(`Failed authentication`)
    return false
  }
  const user: any = jwt.decode(token)
  if (user) {
    log.info(`Sucessfully authentication userId=${user.id}`)
    return true
  } else {
    log.info(`Failed authentication`)
    return false
  }
}

export const getUserFromToken = (context: Context): User => {
  log.info(`Getting user from token`)
  const token = context.req.cookies.token
  if (!token) {
    log.info(`Failed retrieved token`)
    return nullUser
  }
  const user: any = jwt.decode(token)
  if (user) {
    log.info(`Sucessfully retrieved token for userId=${user.id}`)
    return user
  } else {
    log.info(`Failed retrieved token`)
    return nullUser
  }
}

// TODO: add bcrypt
export const selectUserById = async (id: string): Promise<User> => {
  try {
    log.info(`Selecting userId=${id}`)
    const response: User = await UserModel.findOne({
      id
    })
    log.info(`Selected response=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    log.error(`Error selecting user exception=${e}`)
  }
}

// TODO: add bcrypt
export const selectUser = async (
  username: string,
  password: string
): Promise<User> => {
  try {
    log.info(`Selecting username=${username} and password=${password}`)
    const response: User = await UserModel.findOne({
      username
    })
    log.info(`Selected response=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    log.error(`Error selecting user exception=${e}`)
    return nullUser
  }
}

export const selectUsers = async (): Promise<Array<User>> => {
  try {
    log.info(`Selecting all users`)
    const response: Array<User> = await UserModel.find()
    log.info(`Selected response=${JSON.stringify(response)}`)
    return response.map((u) => {
      const { id, username, password, fname, lname, admin } = u
      return {
        id,
        username,
        password,
        fname,
        lname,
        admin
      }
    })
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
