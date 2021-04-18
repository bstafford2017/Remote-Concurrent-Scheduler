import { gql, useMutation, ApolloQueryResult } from '@apollo/client'
import { setErrors } from './error'
import {
  LOADING,
  LOADED,
  LOADED_USER,
  LOADED_USERS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from '.'
import { ILogin, IUser } from '../types'
import ApolloClient from '../apollo'

export const authenticated = () => async (dispatch: Function) => {
  dispatch({ type: LOADING })
  try {
    const { error, data }: ApolloQueryResult<any> = await ApolloClient.query({
      query: gql`
        query {
          auth {
            id
            username
            fname
            lname
            admin
          }
        }
      `
    })
    if (error) {
      console.warn(JSON.stringify(error))
    } else {
      if (data) {
        dispatch({
          type: LOADED
        })
        dispatch({
          type: LOADED_USER,
          payload: data.auth
        })
      }
    }
  } catch (e) {
    console.warn(e)
    dispatch({
      type: LOADED
    })
  }
}

// TODO: Add token
export const login = ({ username, password }: ILogin) => async (
  dispatch: Function
) => {
  dispatch({
    type: LOADING
  })
  try {
    const { error, data }: ApolloQueryResult<any> = await ApolloClient.query({
      query: gql`
        query($username: String!, $password: String!) {
          user(username: $username, password: $password) {
            id
            username
            fname
            lname
            admin
          }
        }
      `,
      variables: {
        username,
        password
      }
    })
    if (error) {
      console.warn(JSON.stringify(error))
      dispatch(setErrors(error.message))
    } else {
      if (data) {
        dispatch({
          type: LOADED
        })
        dispatch({
          type: LOADED_USER,
          payload: data.user
        })
      } else {
        dispatch(setErrors('Invalid credentials'))
      }
    }
  } catch (e) {
    console.warn(e)
    dispatch(setErrors('Invalid credentials. Please try again.'))
  }
}

// TODO: Add token
export const loadUsers = () => async (dispatch: Function) => {
  try {
    const { error, data }: ApolloQueryResult<any> = await ApolloClient.query({
      query: gql`
        query {
          users {
            id
            username
            fname
            lname
            admin
          }
        }
      `
    })
    if (error) {
      console.warn(JSON.stringify(error))
      dispatch(setErrors(error.message))
    } else {
      if (data) {
        dispatch({
          type: LOADED
        })
        dispatch({
          type: LOADED_USERS,
          payload: data.users
        })
      } else {
        dispatch(setErrors('Invalid credentials'))
      }
    }
  } catch (e) {
    console.warn(e)
    dispatch(setErrors('Invalid credentials. Please try again.'))
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
