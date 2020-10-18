import {
  ROOMS_LOADING,
  ROOMS_LOADED,
  CREATE_ROOM,
  UPDATE_ROOM,
  DELETE_ROOM
} from '../actions'

const initialState = {
  rooms: [],
  isLoading: false
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ROOMS_LOADING:
      return { ...state, isLoading: true }
    case ROOMS_LOADED:
      return { ...state, isLoading: false, rooms: action.payload }
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
