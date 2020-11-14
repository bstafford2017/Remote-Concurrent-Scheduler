import mongo from 'mongoose'
const Schema = mongo.Schema

const buildingSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

export default mongo.model('Building', buildingSchema)
