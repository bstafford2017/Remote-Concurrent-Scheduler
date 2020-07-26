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
import { IConfigHeaders } from '../types'

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

export const createEvent = () => {}

export const updateEvent = () => {}

export const deleteEvent = () => {}
