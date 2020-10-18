import { combineReducers } from 'redux'
import buildingReducer from './buildingReducer'
import roomReducer from './roomReducer'
import userReducer from './userReducer'
import eventReducer from './eventReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  building: buildingReducer,
  room: roomReducer,
  user: userReducer,
  event: eventReducer,
  search: searchReducer
})
