import axios from 'axios'
import { returnErrors } from './error'
import {
  LOADING,
  LOADED,
  LOADED_ROOM,
  CREATE_ROOM,
  UPDATE_ROOM,
  DELETE_ROOM
} from '.'
import { IRoom } from '../types'

export const loadRooms = (id: number) => async (dispatch: Function) => {
  try {
    dispatch({
      action: LOADING
    })
    const response = await axios.get(`/api/room/${id}`)
    dispatch({
      action: LOADED
    })
    dispatch({
      action: LOADED_ROOM,
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
