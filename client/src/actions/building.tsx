import { gql, useQuery, useMutation } from '@apollo/client'
import { returnErrors } from './error'
import {
  LOADING,
  LOADED,
  CREATE_BUILDING,
  UPDATE_BUILDING,
  DELETE_BUILDING,
  LOADED_BUILDING
} from '.'
import { IBuilding } from '../types'

export const loadBuildings = () => async (dispatch: Function) => {
  try {
    dispatch({
      type: LOADING
    })
    const response = await useQuery(gql`
      query selectBuildings {
        id
        name
      }
    `)
    dispatch({
      type: LOADED
    })
    dispatch({
      type: LOADED_BUILDING,
      payload: response
    })
  } catch (err) {
    dispatch(returnErrors(err))
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
    dispatch(returnErrors(err))
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
    dispatch(returnErrors(err))
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
    dispatch(returnErrors(err))
  }
}
