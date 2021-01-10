import mongoose from 'mongoose'
import Room from '../../models/Room'
import Building from '../../models/Building'
import User from '../../models/User'

export const selectRoom = async (
  parent: any,
  { id }: { id: string },
  context: any,
  info: any
) => {
  try {
    console.log(`Selecting roomId=${id}`)
    const response: any = await Room.findById(id)
    console.log(`Selected room=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const selectRooms = async () => {
  try {
    console.log(`Selecting all rooms`)
    const response: any = await Room.find()
    console.log(`Selected room=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const addRoom = async (
  parent: any,
  { input }: { input: any },
  context: any,
  info: any
) => {
  try {
    // TODO: validation room number and building

    const buildingId = input.building.id
    console.log(`Looking for buildingId=${buildingId}`)
    const building = await Building.findById(buildingId)
    console.log(`Selected building=${JSON.stringify(building)}`)

    if (!building) {
      console.log(`No building exists for buildingId=${buildingId}`)
      return
    }

    console.log(`Adding room=${JSON.stringify(input)}`)
    const newRoom = new Room({
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

export const updateRoom = async (
  parent: any,
  { input }: { input: any },
  context: any,
  info: any
) => {
  try {
    const buildingId = input.building.id
    console.log(`Looking for buildingId=${buildingId}`)
    const building = await Building.findById(buildingId)
    console.log(`Selected building=${JSON.stringify(building)}`)

    if (!building) {
      console.log(`No building exists for buildingId=${buildingId}`)
      return
    }

    console.log(`Updating room=${JSON.stringify(input)}`)
    const response: any = await Room.updateOne(
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

export const deleteRoom = async (
  parent: any,
  id: string,
  context: any,
  info: any
) => {
  try {
    console.log(`Removing roomId=${id}`)
    const response: any = await Room.findByIdAndDelete(id)
    console.log(`Removed room=${response}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const resolveRoom = async (parent: any) => {
  console.log(`Selecting roomId=${parent.room}`)
  const response: any = await Room.findById(parent.room)
  console.log(`Selected roomId=${JSON.stringify(response)}`)
  return response
}
