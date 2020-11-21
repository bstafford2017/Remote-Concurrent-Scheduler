import mongo from 'mongoose'
const Schema = mongo.Schema

const eventSchema = new Schema({
  _id: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: false
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  room: {
    type: mongo.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  createdBy: {
    type: mongo.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weekdays: {
    type: [Boolean],
    required: false
  }
})

export default mongo.model('Event', eventSchema)
