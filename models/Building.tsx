import mongo from 'mongoose'
const Schema = mongo.Schema

const buildingSchema = new Schema({
  _id: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  }
})

export default mongo.model('Building', buildingSchema)
