import { combineReducers } from 'redux'
import building from './building'
import room from './room'
import user from './user'
import event from './event'
import search from './search'
import select from './select'
import common from './common'

export default combineReducers({
  building,
  room,
  user,
  event,
  search,
  select,
  common
})
