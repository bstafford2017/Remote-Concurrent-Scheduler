import {
  BUILDINGS_LOADING,
  BUILDINGS_LOADED,
  CREATE_BUILDING,
  UPDATE_BUILDING,
  DELETE_BUILDING
} from '../actions'

const initialState = {
  buildings: [],
  isLoading: false
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case BUILDINGS_LOADING:
      return { ...state, isLoading: true }
    case BUILDINGS_LOADED:
      return { ...state, isLoading: false, buildings: action.payload }
    case CREATE_BUILDING:
      return { ...state, buildings: [...state.buildings, action.payload] }
    case UPDATE_BUILDING:
      return {
        ...state,
        buildings: [
          ...state.buildings.filter((e) => e !== action.payload),
          action.payload
        ]
      }
    case DELETE_BUILDING:
      return {
        ...state,
        buildings: [...state.buildings.filter((e) => e !== action.payload)]
      }
    default:
      return { ...state }
  }
}
