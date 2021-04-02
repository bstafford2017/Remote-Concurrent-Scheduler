import { GET_ERRORS, CLEAR_ERRORS } from '../actions'
import { IAction } from '../types'

const initialState = {
  msg: null
}

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, msg: action.payload }
    case CLEAR_ERRORS:
      return {
        msg: null
      }
    default:
      return { ...state }
  }
}
