import mongoose from 'mongoose'
import Building from '../../models/Building'

export const selectBuilding = async (
  parent: any,
  { id }: { id: string },
  context: any,
  info: any
) => {
  try {
    console.log(`Selecting buildingId=${id}`)
    const response: any = await Building.findById(id)
    console.log(`Selected building=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const selectBuildings = async () => {
  try {
    console.log(`Selecting all buildings`)
    const response: any = await Building.find()
    console.log(`Selected buildings=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const addBuilding = async (
  parent: any,
  { input }: { input: any },
  context: any,
  info: any
) => {
  try {
    const buildingName: string = input.name
    console.log(`Looking for buildingName=${buildingName}`)
    const building: any = await Building.findOne({ building: buildingName })
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (building) {
      console.log(`Building already exists for buildingName=${buildingName}`)
      return
    }

    console.log(`Adding building=${JSON.stringify(input)}`)
    const newBuilding = new Building({
      _id: mongoose.Types.ObjectId(),
      name: input.name
    })
    const response: any = await newBuilding.save()
    console.log(`Selected building=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const updateBuilding = async (
  parent: any,
  { input }: { input: any },
  context: any,
  info: any
) => {
  try {
    const buildingName: string = input.name
    console.log(`Looking for buildingName=${buildingName}`)
    const building: any = await Building.findOne({ building: buildingName })
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (building) {
      console.log(`Building already exists for buildingName=${buildingName}`)
      return
    }
    console.log(`Updating building=${JSON.stringify(input)}`)
    const response: any = await Building.updateOne(
      { _id: input.id },
      {
        name: input.name
      }
    )
    console.log(`Updated building=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const deleteBuilding = async (
  parent: any,
  id: string,
  context: any,
  info: any
) => {
  try {
    console.log(`Removing buildingId=${id}`)
    const response: any = await Building.findByIdAndDelete(id)
    console.log(`Removed building=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const resolveBuilding = async (parent: any) => {
  console.log(`Selecting buildingId=${parent.building}`)
  const response: any = await Building.findById(parent.building)
  console.log(`Selected building=${JSON.stringify(response)}`)
  return response
}
