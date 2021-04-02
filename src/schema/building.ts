import mongoose from 'mongoose'
import Building, { BuildingModel } from '../models/Building'

export const selectBuilding = async (_, { id }): Promise<Building> => {
  try {
    console.log(`Selecting buildingId=${id}`)
    const response: Building = await BuildingModel.findById(id)
    console.log(`Selected building=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const selectBuildings = async (): Promise<Building[]> => {
  try {
    console.log(`Selecting all buildings`)
    const response: Building[] = await BuildingModel.find()
    console.log(`Selected buildings=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const addBuilding = async (
  _,
  { input: { name } }
): Promise<Building> => {
  try {
    console.log(`Looking for buildingName=${name}`)
    const building: Building = await BuildingModel.findOne({
      building: name
    })
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (building) {
      console.log(`Building already exists for buildingName=${name}`)
      return
    }

    console.log(`Adding buildingName=${JSON.stringify(name)}`)
    const newBuilding: any = new BuildingModel({
      _id: mongoose.Types.ObjectId(),
      name
    })
    const response: any = await newBuilding.save()
    console.log(`Selected building=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const updateBuilding = async (_, { id, name }): Promise<Building> => {
  try {
    console.log(`Looking for buildingName=${name}`)
    const building: Building = await BuildingModel.findOne({
      building: name
    })
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (building) {
      console.log(`Building already exists for buildingName=${name}`)
      return
    }
    console.log(`Updating buildingName=${JSON.stringify(name)}`)
    const response: any = await BuildingModel.updateOne(
      { _id: id },
      {
        name
      }
    )
    console.log(`Updated building=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const deleteBuilding = async (_, id: string): Promise<Building> => {
  try {
    console.log(`Removing buildingId=${id}`)
    const response: Building = await BuildingModel.findByIdAndDelete(id)
    console.log(`Removed building=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const resolveBuilding = async ({ building }): Promise<Building> => {
  console.log(`Selecting buildingId=${building}`)
  const response: Building = await BuildingModel.findById(building)
  console.log(`Selected building=${JSON.stringify(response)}`)
  return response
}
