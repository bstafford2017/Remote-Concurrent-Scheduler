import axios from 'axios'
import { returnErrors } from './errorActions'
import {
  AUTH_ERROR,
  ROOMS_LOADING,
  ROOMS_LOADED,
  CREATE_ROOM,
  UPDATE_ROOM,
  DELETE_ROOM
} from './'
import { IConfigHeaders } from '../types'

export const loadRooms = () => async (dispatch: Function) => {
  try {
    const response = await axios.get('/api/event')
    dispatch({
      action: ROOMS_LOADED,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const createRoom = () => {}

export const updateRoom = () => {}

export const deleteRoom = () => {}
