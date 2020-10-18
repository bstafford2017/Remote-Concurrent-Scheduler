import {
  EVENTS_LOADING,
  EVENTS_LOADED,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from '../actions'

const initialState = {
  events: [],
  isLoading: false
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case EVENTS_LOADING:
      return { ...state, isLoading: true }
    case EVENTS_LOADED:
      return { ...state, isLoading: false, events: action.payload }
    case CREATE_EVENT:
      return { ...state, events: [...state.events, action.payload] }
    case UPDATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter((e) => e !== action.payload),
          action.payload
        ]
      }
    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((e) => e !== action.payload)]
      }
    default:
      return { ...state }
  }
}
