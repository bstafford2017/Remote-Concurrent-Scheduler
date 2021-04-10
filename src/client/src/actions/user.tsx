import { gql, useQuery, useMutation, QueryResult } from '@apollo/client'
import { setErrors } from './error'
import {
  LOADING,
  LOADED,
  LOADED_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from '.'
import { ILogin, IUser } from '../types'

// TODO: Add token
export const login = ({ username, password }: ILogin) => async (
  dispatch: Function
) => {
  dispatch({
    type: LOADING
  })
  const { error, data }: QueryResult = useQuery(gql`
      query {
        user (username: ${username}, password: ${password}) {
          id,
          username,
          fname,
          lname,
          admin
        }
      }
    `)
  if (error) {
    console.warn(JSON.stringify(error))
    dispatch(setErrors(error.message))
  } else {
    dispatch({
      type: LOADED
    })
    dispatch({
      type: LOADED_USER,
      payload: data
    })
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
    dispatch(setErrors(err))
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
