import axios from 'axios'
import { returnErrors } from './error'
import {
  LOADING,
  LOADED,
  LOADED_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from '.'
import { ILogin, IUser, IConfigHeaders } from '../types'

const tokenConfig = (getState: Function) => {
  const token = getState().user.token

  const config: IConfigHeaders = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  if (token) {
    config.headers['x-auth-token'] = token
  }

  return config
}

export const loadUser = () => async (
  dispatch: Function,
  getState: Function
) => {
  try {
    dispatch({
      action: LOADING
    })
    const response = await axios.get('/api/user', tokenConfig(getState))
    dispatch({
      action: LOADED
    })
    dispatch({
      action: LOADED_USER,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const createUser = (user: IUser) => async (dispatch: Function) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await axios.post('/api/auth/register', user, config)
    dispatch({
      action: REGISTER_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
    dispatch({
      type: REGISTER_FAIL
    })
  }
}
export const updateUser = () => {}

export const deleteUser = () => {}

export const login = (creds: ILogin) => async (dispatch: Function) => {
  try {
    dispatch({ type: LOADING })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('/api/user/login', creds, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data))
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}
