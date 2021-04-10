import { gql, useQuery, QueryResult } from '@apollo/client'
import axios from 'axios'
import { setErrors } from './error'
import {
  LOADING,
  LOADED,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  LOADED_EVENT
} from '.'
import { IEvent } from '../types'

export const loadEvents = () => async (dispatch: Function) => {
  try {
    dispatch({ type: LOADING })
    const current = new Date()
    const start = new Date(
      current.getFullYear(),
      current.getMonth(),
      1
    ).toISOString()
    const end = new Date(
      current.getFullYear(),
      current.getMonth() + 1,
      0
    ).toISOString()
    const { error, data }: QueryResult = await useQuery(gql`
      query {
        events(start: ${start}, end: ${end}) {
          id
          startTime
          endTime
          room {
            id
            number
            seats
            building {
              id
              name
            }
          }
          user {
            id
            username
            password
          }
        }
      }
    `)
    if (error) {
      console.warn(JSON.stringify(error))
      dispatch(setErrors(error.message))
    }
    dispatch({
      type: LOADED
    })
    dispatch({
      type: LOADED_EVENT,
      payload: data
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const createEvent = (event: IEvent) => async (dispatch: Function) => {
  try {
    const response = await axios.post('/api/event/create', event)
    dispatch({
      type: CREATE_EVENT,
      payload: response.data
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const updateEvent = (event: IEvent) => async (dispatch: Function) => {
  try {
    const response = await axios.post('/api/event/update', event)
    dispatch({
      type: UPDATE_EVENT,
      payload: response.data
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const deleteEvent = (id: number) => async (dispatch: Function) => {
  try {
    const response = await axios.post('/api/event/delete', id)
    dispatch({
      type: DELETE_EVENT,
      payload: response.data
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}
