import mongo from 'mongoose'
const Schema = mongo.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true
  }
})

export default mongo.model('User', userSchema)
