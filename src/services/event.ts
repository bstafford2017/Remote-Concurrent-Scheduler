import mongoose from 'mongoose'
import Event, { EventModel } from '../models/Event'
import Room, { RoomModel } from '../models/Room'
import User, { UserModel } from '../models/User'
import Building, { BuildingModel } from '../models/Building'
import log from '../config/logger'

export const selectEvent = async (id: string): Promise<Event> => {
  try {
    log.info(`Selecting eventId=${id}`)
    const response: Event = await EventModel.findOne({ id })
    log.info(`Selected event=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    log.error(`Error selecting event exception=${e}`)
  }
}

export const addEvent = async (_, { input }): Promise<Event> => {
  try {
    const roomId: string = input.room.id
    console.log(`Looking for roomId=${roomId}`)
    const room: any = await RoomModel.findById(roomId)
    console.log(`Selected for room=${JSON.stringify(room)}`)

    if (!room) {
      console.log(`No room exists for roomId=${roomId}`)
      return
    }

    const buildingId: string = room.building
    console.log(`Looking for buildingId=${buildingId}`)
    const building: any = await BuildingModel.findById(buildingId)
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (!building) {
      console.log(`No building exists for buildingId=${buildingId}`)
      return
    }

    const username: string = input.user.username
    console.log(`Looking for username=${username}`)
    const user: any = await UserModel.findOne({ username })
    console.log(`Selected for user=${JSON.stringify(user)}`)

    if (!user) {
      console.log(`No user exists for userId=${username}`)
      return
    }

    const conflictingEvent = EventModel.find({
      $and: [
        { startDate: { $gt: input.startDate } },
        { endDate: { $lt: input.endDate } },
        { startTime: { $gt: input.startTime } },
        { endTime: { $lt: input.endTime } },
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
    const event = new EventModel({
      _id: mongoose.Types.ObjectId(),
      title: input.title,
      startDate: input.startDate,
      endDate: input.endDate,
      startTime: input.startTime,
      endTime: input.endTime,
      weekdays: input.weekdays,
      room: room._id,
      user: user._id
    })
    const response: any = await event.save()
    console.log(`Added event=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const updateEvent = async (
  _,
  { input }: { input: any }
): Promise<Event> => {
  try {
    const roomId: string = input.room.id
    console.log(`Looking for roomId=${roomId}`)
    const room: any = await RoomModel.findById(roomId)
    console.log(`Selected for room=${JSON.stringify(room)}`)

    if (!room) {
      console.log(`No room exists for roomId=${roomId}`)
      return
    }

    const buildingId: string = room.building
    console.log(`Looking for buildingId=${buildingId}`)
    const building: Building = await BuildingModel.findById(buildingId)
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (!building) {
      console.log(`No building exists for buildingId=${buildingId}`)
      return
    }

    const username: string = input.user.username
    console.log(`Looking for username=${username}`)
    const user: any = await UserModel.findOne({ username })
    console.log(`Selected for user=${JSON.stringify(user)}`)

    if (!user) {
      console.log(`No user exists for userId=${username}`)
      return
    }

    console.log(`Updating event=${JSON.stringify(input)}`)
    const response: any = await EventModel.updateOne(
      { _id: input.id },
      {
        title: input.title,
        startDate: input.startDate,
        endDate: input.endDate,
        startTime: input.startTime,
        endTime: input.endTime,
        weekends: input.weekends,
        room: input.room,
        user: input.user
      }
    )
    console.log(`Updated event=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const deleteEvent = async (_, id: string): Promise<Event> => {
  try {
    console.log(`Removing eventId=${id}`)
    const response: Event = await EventModel.findByIdAndRemove(id)
    console.log(`Removed event=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const resolveEvents = async ({ user }): Promise<Event[]> => {
  console.log(`Selecting events for username=${user}`)
  const response: Event[] = await EventModel.find({ user })
  console.log(`Selected events=${JSON.stringify(response)}`)
  return response
}
