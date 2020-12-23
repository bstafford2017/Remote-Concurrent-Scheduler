import mongoose from 'mongoose'
import User from '../../models/User'

export const selectUser = async (
  parent: any,
  { id }: { id: any },
  context: any,
  info: any
) => {
  try {
    console.log(`Selecting userId=${id}`)
    return await User.findById(id)
  } catch (e) {
    console.log(e)
  }
}

export const selectUsers = async () => {
  try {
    console.log(`Selecting all users`)
    return await User.find()
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
    return await user.save()
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
    return await User.updateOne(
      { _id: input.id },
      {
        username: input.username,
        password: input.password,
        firstName: input.firstName,
        lastName: input.lastName,
        admin: input.admin
      }
    )
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
    console.log(`Removing user=${id}`)
    return await User.findByIdAndDelete(id)
  } catch (e) {
    console.log(e)
  }
}
