import mongoose from 'mongoose'
import Building, { BuildingModel } from '../models/Building'
import log from '../config/logger'

export const selectBuilding = async (id: string): Promise<Building> => {
  try {
    log.info(`Selecting buildingId=${id}`)
    const response: Building = await BuildingModel.findOne({
      id
    })
    log.info(`Selected building=${JSON.stringify(response)}`)
    const { name } = response
    return {
      id,
      name
    }
  } catch (e) {
    console.log(e)
    log.error(`Error selecting building exception=${e}`)
  }
}

export const addBuilding = async (_, { input: { name } }): Promise<any> => {
  try {
    console.log(`Looking for buildingName=${name}`)
    const building: any = await BuildingModel.findOne({
      building: name
    })
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (building) {
      console.log(`any already exists for buildingName=${name}`)
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

export const updateBuilding = async (_, { id, name }): Promise<any> => {
  try {
    console.log(`Looking for buildingName=${name}`)
    const building: any = await BuildingModel.findOne({
      building: name
    })
    console.log(`Selected for building=${JSON.stringify(building)}`)

    if (building) {
      console.log(`any already exists for buildingName=${name}`)
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

export const deleteBuilding = async (_, id: string): Promise<any> => {
  try {
    console.log(`Removing buildingId=${id}`)
    const response: any = await BuildingModel.findByIdAndRemove(id)
    console.log(`Removed building=${JSON.stringify(response)}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export const resolveBuilding = async ({ building }): Promise<any> => {
  console.log(`Selecting buildingId=${building}`)
  const response: any = await BuildingModel.findById(building)
  console.log(`Selected building=${JSON.stringify(response)}`)
  return response
}
