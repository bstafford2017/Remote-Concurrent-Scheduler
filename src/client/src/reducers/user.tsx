import {
  LOADED_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from '../actions'
import { IAction } from '../types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null
}

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case LOADED_USER:
      return { ...state, user: action.payload }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    default:
      return { ...state }
  }
}
