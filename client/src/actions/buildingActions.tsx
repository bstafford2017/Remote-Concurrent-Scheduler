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
import { IConfigHeaders } from '../types'

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

export const createBuilding = () => {}

export const updateBuilding = () => {}

export const deleteBuilding = () => {}
