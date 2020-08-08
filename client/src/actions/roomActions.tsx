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
import { IRoom } from '../types'

export const loadRooms = (id: number) => async (dispatch: Function) => {
  try {
    const response = await axios.get(`/api/room/${id}`)
    dispatch({
      action: ROOMS_LOADED,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const createRoom = (room: IRoom) => async (dispatch: Function) => {
  try {
    const response = await axios.post('/api/room/create', room)
    dispatch({
      action: CREATE_ROOM,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const updateRoom = (room: IRoom) => async (dispatch: Function) => {
  try {
    const response = await axios.post('/api/room/update', room)
    dispatch({
      action: UPDATE_ROOM,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const deleteRoom = (id: number) => async (dispatch: Function) => {
  const response = await axios.post('/api/room/delete', id)
  dispatch({
    action: DELETE_ROOM,
    payload: response.data
  })
}
