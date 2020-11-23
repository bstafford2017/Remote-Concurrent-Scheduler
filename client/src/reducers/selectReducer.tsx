import { SELECT_BUILDING, SELECT_ROOM, SELECT_BY_MONTH } from '../actions'

const initialState = {
  building: '',
  room: '',
  byMonth: false
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SELECT_BUILDING:
      return { ...state, building: action.payload }
    case SELECT_ROOM:
      return { ...state, room: action.payload }
    case SELECT_BY_MONTH:
      return { ...state, byMonth: action.payload }
    default:
      return { ...state }
  }
}
