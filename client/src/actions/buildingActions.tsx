import axios from 'axios'
import { returnErrors } from './errorActions'
import {
  AUTH_ERROR,
  BUILDINGS_LOADING,
  BUILDINGS_LOADED,
  CREATE_BUILDING,
  UPDATE_BUILDING,
  DELETE_BUILDING
} from './'
import { IBuilding } from '../types'

export const loadBuildings = () => async (dispatch: Function) => {
  try {
    const response = await axios.get('/api/building')
    dispatch({
      action: BUILDINGS_LOADED,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const createBuilding = (building: IBuilding) => async (
  dispatch: Function
) => {
  try {
    const response = await axios.post('/api/building/create', building)
    dispatch({
      action: CREATE_BUILDING,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const updateBuilding = (building: IBuilding) => async (
  dispatch: Function
) => {
  try {
    const response = await axios.post(`/api/building/update`, building)
    dispatch({
      action: UPDATE_BUILDING,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const deleteBuilding = (id: number) => async (dispatch: Function) => {
  try {
    const response = await axios.post(`/api/building/delete`, id)
    dispatch({
      action: DELETE_BUILDING,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}
