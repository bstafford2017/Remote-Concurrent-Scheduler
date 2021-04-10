import {
  SELECT_BUILDING,
  SELECT_ROOM,
  SELECT_BY_MONTH,
  SET_HEADER
} from '../actions'
import { IAction } from '../types'

const initialState = {
  building: '',
  room: '',
  byMonth: true,
  month: new Date().toLocaleString('default', { month: 'long' })
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SELECT_BUILDING:
      return { ...state, building: action.payload }
    case SELECT_ROOM:
      return { ...state, room: action.payload }
    case SELECT_BY_MONTH:
      return { ...state, byMonth: action.payload }
    case SET_HEADER:
      return { ...state, month: action.payload }
    default:
      return { ...state }
  }
}

export default reducer
