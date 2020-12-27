import mongoose from 'mongoose'
import User from '../../models/User'

// TODO: add bcrypt
export const selectUser = async (
  parent: any,
  { username, password }: { username: string; password: string },
  context: any,
  info: any
) => {
  try {
    console.log(`Selecting username=${username} and password=${password}`)
    const response: any = await User.findOne({ username, password })
    console.log(`Selected response=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const selectUsers = async () => {
  try {
    console.log(`Selecting all users`)
    const response: any = await User.find()
    console.log(`Selected response=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const addUser = async (
  parent: any,
  { input }: { input: any },
  context: any,
  info: any
) => {
  try {
    console.log(`Adding user=${JSON.stringify(input)}`)
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      username: input.username,
      password: input.password,
      firstName: input.firstName,
      lastName: input.lastName,
      admin: input.admin,
      events: []
    })
    const response: any = await user.save()
    console.log(`Added user=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const updateUser = async (
  parent: any,
  { input }: { input: any },
  context: any,
  info: any
) => {
  try {
    console.log(`Updating user=${JSON.stringify(input)}`)
    const response: any = await User.updateOne(
      { _id: input.id },
      {
        username: input.username,
        password: input.password,
        firstName: input.firstName,
        lastName: input.lastName,
        admin: input.admin
      }
    )
    console.log(`Updated user=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const deleteUser = async (
  parent: any,
  id: string,
  context: any,
  info: any
) => {
  try {
    console.log(`Removing userId=${id}`)
    const response: any = await User.findByIdAndDelete(id)
    console.log(`Removed user=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const resolveUser = async (parent: any) => {
  console.log(`Selecting userId=${parent.createdBy}`)
  const response: any = await User.find({ username: parent.createdBy })
  console.log(`Selected user=${JSON.stringify(response)}`)
  return response
}
