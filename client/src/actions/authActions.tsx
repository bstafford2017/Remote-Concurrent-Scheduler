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
import { IUser, IConfigHeaders } from '../types'

// Check token & load user
export const loadUser = () => (dispatch: Function, getState: Function) => {
  // User loading
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
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const register = ({
  username,
  password,
  fname,
  lname,
  admin
}: IUser) => (dispatch: Function) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request body
  const body = JSON.stringify({ name, email, password })

  axios
    .post('/api/auth/register', body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      )
      dispatch({
        type: REGISTER_FAIL
      })
    })
}

export const login = ({ username, password }: ILogin) => (
  dispatch: Function
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ username, password })

  axios
    .post('/api/auth/login', body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      )
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
