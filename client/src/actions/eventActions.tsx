import axios from 'axios'
import { returnErrors } from './errorActions'
import {
  AUTH_ERROR,
  EVENTS_LOADING,
  EVENTS_LOADED,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from './'
import { IEvent } from '../types'

export const loadEvents = () => async (dispatch: Function) => {
  try {
    const response = await axios.get('/api/event')
    dispatch({
      action: EVENTS_LOADED,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const createEvent = (event: IEvent) => async (dispatch: Function) => {
  try {
    const response = await axios.post('/api/event/create', event)
    dispatch({
      action: CREATE_EVENT,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const updateEvent = (event: IEvent) => async (dispatch: Function) => {
  try {
    const response = await axios.post('/api/event/update', event)
    dispatch({
      action: UPDATE_EVENT,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}

export const deleteEvent = (id: number) => async (dispatch: Function) => {
  try {
    const response = await axios.post('/api/event/delete', id)
    dispatch({
      action: DELETE_EVENT,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}
