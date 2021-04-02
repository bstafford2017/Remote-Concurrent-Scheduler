import { LOADED_ROOM, CREATE_ROOM, UPDATE_ROOM, DELETE_ROOM } from '../actions'
import { IAction } from '../types'

const initialState = {
  rooms: []
}

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case LOADED_ROOM:
      return { ...state, rooms: [action.payload] }
    case CREATE_ROOM:
      return { ...state, rooms: [...state.rooms, action.payload] }
    case UPDATE_ROOM:
      return {
        ...state,
        rooms: [
          ...state.rooms.filter((e) => e !== action.payload),
          action.payload
        ]
      }
    case DELETE_ROOM:
      return {
        ...state,
        rooms: [...state.rooms.filter((e) => e !== action.payload)]
      }
    default:
      return { ...state }
  }
}
