import { gql, useQuery, useMutation } from '@apollo/client'
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

// TODO: Add token
export const login = (user: ILogin) => async (dispatch: Function) => {
  try {
    dispatch({
      type: LOADING
    })
    const response = await useQuery(gql`
      query {
        selectUser(username: ${user.username}, password: ${user.password}) {
          username
        }
      }
    `)
    dispatch({
      type: LOADED
    })
    dispatch({
      type: LOADED_USER,
      payload: response.data
    })
  } catch (err) {
    console.log(err.toString())
    dispatch(returnErrors(err))
  }
}

export const createUser = (user: IUser) => async (dispatch: Function) => {
  try {
    const response = await useMutation(gql`
      mutation {
        addUser(
          input: {
            username: ${user.username}
            password: ${user.password}
            firstName: ${user.fname}
            lastName: ${user.lname}
            admin: ${user.admin}
          }
        ) {
          username
          password
        }
      }
    `)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response
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

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}
