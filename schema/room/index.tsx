import mongoose from 'mongoose'
import Room from '../../models/Room'
import Building from '../../models/Building'

export const selectRooms = async () => {
  try {
    console.log(`Selecting all rooms`)
    return await Room.find()
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
    console.log(`Looking for buildingId=${JSON.stringify(input.building)}`)
    const building = await Building.findById(input.building)
    if (building) {
      console.log(`Adding room=${JSON.stringify(input)}`)
      const room = new Room({
        _id: mongoose.Types.ObjectId(),
        number: input.number,
        seats: input.seats,
        projector: input.projector,
        building: input.building
      })
      return await room.save()
    } else {
      console.log(`No building exists for buildingId=${input.building}`)
    }
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
    console.log(`Updating room=${JSON.stringify(input)}`)
    return await Room.updateOne(
      { _id: input.id },
      {
        number: input.number,
        seats: input.seats,
        projector: input.projector,
        building: input.building
      }
    )
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
    console.log(`Removing room=${id}`)
    return await Room.findByIdAndDelete(id)
  } catch (e) {
    console.log(e)
  }
}
