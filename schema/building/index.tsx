import mongoose from 'mongoose'
import Building from '../../models/Building'

export const selectBuildings = async () => {
  try {
    console.log(`Selecting all buildings`)
    return await Building.find()
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
    console.log(`Adding building=${JSON.stringify(input)}`)
    const building = new Building({
      _id: mongoose.Types.ObjectId(),
      name: input.name
    })
    return await building.save()
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
    console.log(`Updating building=${JSON.stringify(input)}`)
    return await Building.updateOne(
      { _id: input.id },
      {
        name: input.name
      }
    )
  } catch (e) {
    console.log(e)
  }
}

export const deleteBuilding = (
  parent: any,
  id: string,
  context: any,
  info: any
) => {
  try {
    console.log(`Removing user=${id}`)
    return Building.findByIdAndDelete(id)
  } catch (e) {
    console.log(e)
  }
}
