import { gql, useMutation, ApolloQueryResult } from '@apollo/client'
import { setErrors } from './error'
import {
  LOADING,
  LOADED,
  CREATE_BUILDING,
  UPDATE_BUILDING,
  DELETE_BUILDING,
  LOADED_BUILDINGS
} from '.'
import { IBuilding } from '../types'
import ApolloClient from '../apollo'

export const loadBuildings = () => async (dispatch: Function) => {
  try {
    const { error, data }: ApolloQueryResult<any> = await ApolloClient.query({
      query: gql`
        query {
          buildings {
            id
            name
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
          type: LOADED_BUILDINGS,
          payload: data.buildings
        })
      } else {
        dispatch(setErrors('Invalid credentials'))
      }
    }
  } catch (e) {
    console.warn(e)
    dispatch(setErrors(e.message))
  }
}

export const createBuilding = (building: IBuilding) => async (
  dispatch: Function
) => {
  try {
    const response = await useMutation(gql`
      mutation {
        addBuilding(input: { id: ${building.id}, name: ${building.name} }) {
          name
        }
      }
    `)
    dispatch({
      type: CREATE_BUILDING,
      payload: response
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const updateBuilding = (building: IBuilding) => async (
  dispatch: Function
) => {
  try {
    const response = await useMutation(gql`
    mutation {
      updateBuilding(input: { id: ${building.id}, name: ${building.name} }) {
        name
      }
    }
  `)
    dispatch({
      type: UPDATE_BUILDING,
      payload: response
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const deleteBuilding = (id: number) => async (dispatch: Function) => {
  try {
    const response = await useMutation(gql`
    mutation {
      deleteBuilding(id: ${id}) {
        name
      }
    }
  `)
    dispatch({
      type: DELETE_BUILDING,
      payload: response
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}
