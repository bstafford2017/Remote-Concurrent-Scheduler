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
  isAdmin: false,
  user: null
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOADED_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isAdmin: action.payload.user
      }
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
export default reducer
