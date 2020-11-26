import {
  LOADED_BUILDING,
  CREATE_BUILDING,
  UPDATE_BUILDING,
  DELETE_BUILDING
} from '../actions'
import { IAction } from '../types'

const initialState = {
  buildings: []
}

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case LOADED_BUILDING:
      return { ...state, buildings: [action.payload] }
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
