import mongoose from 'mongoose'
import Event from '../../models/Event'
import Room from '../../models/Room'
import User from '../../models/User'
import Building from '../../models/Building'

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
    const roomId: string = input.room.id
    console.log(`Looking for roomId=${roomId}`)
    const room: any = await Room.findById(roomId)
    console.log(`Selected for room=${JSON.stringify(room)}`)

    if (!room) {
      console.log(`No room exists for roomId=${roomId}`)
      return
    }

    const buildingId: string = room.building
    console.log(`Looking for buildingId=${buildingId}`)
    const building: any = await Building.findById(buildingId)
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (!building) {
      console.log(`No building exists for buildingId=${buildingId}`)
      return
    }

    const username: string = input.createdBy.username
    console.log(`Looking for username=${username}`)
    const user: any = await User.findOne({ username })
    console.log(`Selected for user=${JSON.stringify(user)}`)

    if (!user) {
      console.log(`No user exists for userId=${username}`)
      return
    }

    const conflictingEvent = Event.find({
      $and: [
        { startDate: { $gt: input.startDate } },
        { endDate: { $lt: input.endDate } },
        { room: roomId },
        { building: buildingId }
      ]
    })

    if (conflictingEvent) {
      console.log(
        `Unable to schedule event due to conflict for startDate=${input.endDate} and endDate=${input.startDate}`
      )
      return
    }

    console.log(`Adding event=${JSON.stringify(input)}`)
    const event = new Event({
      _id: mongoose.Types.ObjectId(),
      title: input.title,
      startDate: input.startDate,
      endDate: input.endDate,
      startTime: input.startTime,
      endTime: input.endTime,
      weekdays: input.weekdays,
      room: room._id,
      createdBy: user._id
    })
    const response: any = await event.save()
    console.log(`Added event=${JSON.stringify(response)}`)
    return response
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
    const roomId: string = input.room.id
    console.log(`Looking for roomId=${roomId}`)
    const room: any = await Room.findById(roomId)
    console.log(`Selected for room=${JSON.stringify(room)}`)

    if (!room) {
      console.log(`No room exists for roomId=${roomId}`)
      return
    }

    const buildingId: string = room.building
    console.log(`Looking for buildingId=${buildingId}`)
    const building: any = await Building.findById(buildingId)
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (!building) {
      console.log(`No building exists for buildingId=${buildingId}`)
      return
    }

    const username: string = input.createdBy.username
    console.log(`Looking for username=${username}`)
    const user: any = await User.findOne({ username })
    console.log(`Selected for user=${JSON.stringify(user)}`)

    if (!user) {
      console.log(`No user exists for userId=${username}`)
      return
    }

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
