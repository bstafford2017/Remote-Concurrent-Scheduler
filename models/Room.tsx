import mongo from 'mongoose'
const Schema = mongo.Schema

const roomSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  projector: {
    type: Boolean,
    required: true
  },
  building: {
    type: mongo.Schema.Types.ObjectId,
    ref: 'Building',
    required: true
  }
})

export default mongo.model('Room', roomSchema)
