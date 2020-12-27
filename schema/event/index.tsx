import mongoose from 'mongoose'
import Event from '../../models/Event'
import Room from '../../models/Event'
import User from '../../models/User'

export const selectEvent = async (
  parent: any,
  { id }: { id: any },
  context: any,
  info: any
) => {
  try {
    console.log(`Selecting eventId=${id}`)
    const response: any = await Event.findById(id)
    console.log(`Selected event=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const selectEvents = async () => {
  try {
    console.log(`Selecting all events`)
    const response: any = await Event.find()
    console.log(`Selected events=${JSON.stringify(response)}`)
    return response
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
    console.log(`Looking for roomId=${input.room}`)
    const room = await Room.findById(input.room)
    console.log(`Selected for room=${JSON.stringify(room)}`)
    console.log(`Looking for username=${input.createdBy}`)
    const user = await User.findById(input.createdBy)
    console.log(`Selected for user=${JSON.stringify(user)}`)
    if (room && user) {
      console.log(`Adding event=${JSON.stringify(input)}`)
      const event = new Event({
        _id: mongoose.Types.ObjectId(),
        title: input.title,
        startDate: input.startDate,
        endDate: input.endDate,
        startTime: input.startTime,
        endTime: input.endTime,
        weekdays: input.weekdays,
        room: input.room,
        createdBy: input.createdBy
      })
      const response: any = await event.save()
      console.log(`Added event=${JSON.stringify(response)}`)
      return response
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
    const response: any = await Event.updateOne(
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
    console.log(`Updated event=${JSON.stringify(response)}`)
    return response
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
    console.log(`Removing eventId=${id}`)
    const response: any = Event.findByIdAndDelete(id)
    console.log(`Removed event=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const resolveEvents = async (parent: any) => {
  console.log(`Selecting events for username=${parent.createdBy}`)
  const response: any = await Event.find({ createdBy: parent.createdBy })
  console.log(`Selected events=${JSON.stringify(response)}`)
  return response
}
