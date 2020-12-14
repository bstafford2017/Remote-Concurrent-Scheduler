import mongoose from 'mongoose'
import Event from '../../models/Event'
import Room from '../../models/Event'
import User from '../../models/User'

export const selectEvents = async () => {
  try {
    console.log(`Selecting all events`)
    return await Event.find()
  } catch (e) {
    console.log(e)
  }
}

export const addEvent = async (
  parent: any,
  { input }: { input: any },
  context: any,
  info: any
) => {
  try {
    console.log(`Looking for roomId=${JSON.stringify(input.room)}`)
    const room = await Room.findById(input.room)
    console.log(`Looking for username=${JSON.stringify(input.createdBy)}`)
    const user = await User.findById(input.createdBy)
    if (room && user) {
      console.log(`Adding event=${JSON.stringify(input)}`)
      const event = new Event({
        _id: mongoose.Types.ObjectId(),
        title: input.title,
        startDate: input.startDate,
        endDate: input.endDate,
        startTime: input.startTime,
        endTime: input.endTime,
        weekends: input.weekends,
        room: input.room,
        createdBy: input.createdBy
      })
      return await event.save()
    } else if (!room && user) {
      console.log(`No room exists for roomId=${input.room}`)
    } else if (room && !user) {
      console.log(`No user exists for userId=${input.createdBy}`)
    } else {
      console.log(
        `No room and user exists for userId=${input.createdBy} and roomId=${input.room}`
      )
    }
  } catch (e) {
    console.log(e)
  }
}

export const updateEvent = async (
  parent: any,
  { input }: { input: any },
  context: any,
  info: any
) => {
  try {
    console.log(`Updating event=${JSON.stringify(input)}`)
    return await Event.updateOne(
      { _id: input.id },
      {
        title: input.title,
        startDate: input.startDate,
        endDate: input.endDate,
        startTime: input.startTime,
        endTime: input.endTime,
        weekends: input.weekends,
        room: input.room,
        createdBy: input.createdBy
      }
    )
  } catch (e) {
    console.log(e)
  }
}

export const deleteEvent = (
  parent: any,
  id: string,
  context: any,
  info: any
) => {
  try {
    console.log(`Removing user=${id}`)
    return Event.findByIdAndDelete(id)
  } catch (e) {
    console.log(e)
  }
}
