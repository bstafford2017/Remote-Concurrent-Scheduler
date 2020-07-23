import axios from 'axios'
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './'
import { returnErrors } from './errorActions'
import { ILogin, IUser, IConfigHeaders } from '../types'

export const loadUser = () => (dispatch: Function, getState: Function) => {
  dispatch({ type: USER_LOADING })

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const register = (user: IUser) => (dispatch: Function) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  axios
    .post('/api/auth/register', user, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data))
      dispatch({
        type: REGISTER_FAIL
      })
    })
}

export const login = (creds: ILogin) => (dispatch: Function) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  axios
    .post('/api/auth/login', creds, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const tokenConfig = (getState: Function) => {
  const token = getState().auth.token

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
