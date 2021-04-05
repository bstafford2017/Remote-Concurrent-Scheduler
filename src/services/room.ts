import mongoose from 'mongoose'
import Room, { RoomModel } from '../models/Room'
import Building, { BuildingModel } from '../models/Building'
import log from '../config/logger'

export const selectRoom = async (id: string): Promise<any> => {
  try {
    log.info(`Selecting roomId=${id}`)
    const response: any = await RoomModel.findOne({
      id
    })
    log.info(`Selected room=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    log.error(`Error selecting room exception=${e}`)
  }
}

export const addRoom = async (_, { input }): Promise<any> => {
  try {
    const buildingId = input.building.id
    console.log(`Looking for buildingId=${buildingId}`)
    const building: Building = await BuildingModel.findById(buildingId)
    console.log(`Selected building=${JSON.stringify(building)}`)

    if (!building) {
      console.log(`No building exists for buildingId=${buildingId}`)
      return
    }

    const existingRoom = RoomModel.find({
      $and: [{ number: input.number }, { building: buildingId }]
    })

    if (existingRoom) {
      console.log(
        `This room in the specified building already exists for roomNumber=${input.number} and buildingId=${buildingId}`
      )
    }

    console.log(`Adding room=${JSON.stringify(input)}`)
    const newRoom = new RoomModel({
      _id: mongoose.Types.ObjectId(),
      number: input.number,
      seats: input.seats,
      projector: input.projector,
      building: input.building.id
    })
    const response: any = await newRoom.save()
    console.log(`Added room=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const updateRoom = async (_, { input }): Promise<any> => {
  try {
    const buildingId = input.building.id
    console.log(`Looking for buildingId=${buildingId}`)
    const building: Building = await BuildingModel.findById(buildingId)
    console.log(`Selected building=${JSON.stringify(building)}`)

    if (!building) {
      console.log(`No building exists for buildingId=${buildingId}`)
      return
    }

    console.log(`Updating room=${JSON.stringify(input)}`)
    const response: any = await RoomModel.updateOne(
      { _id: input.id },
      {
        number: input.number,
        seats: input.seats,
        projector: input.projector,
        building: input.building
      }
    )
    console.log(`Updated room=${response}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const deleteRoom = async (_, id: string): Promise<any> => {
  try {
    console.log(`Removing roomId=${id}`)
    const response: any = await RoomModel.findByIdAndRemove(id)
    console.log(`Removed room=${response}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const resolveRoom = async ({ room }) => {
  console.log(`Selecting roomId=${room}`)
  const response: any = await RoomModel.findById(room)
  console.log(`Selected roomId=${JSON.stringify(response)}`)
  return response
}
