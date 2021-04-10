import { gql, ApolloQueryResult } from '@apollo/client'
import axios from 'axios'
import { setErrors } from './error'
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, LOADED_EVENT } from '.'
import { IEvent } from '../types'
import ApolloClient from '../apollo'

export const loadEvents = (start: string, end: string) => async (
  dispatch: Function
) => {
  try {
    const {
      error,
      data
    }: ApolloQueryResult<Array<IEvent>> = await ApolloClient.query({
      query: gql`
        query($start: String!, $end: String!) {
          events(start: $start, end: $end) {
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
      `,
      variables: {
        start,
        end
      }
    })
    if (error) {
      console.warn(JSON.stringify(error))
      dispatch(setErrors(error.message))
    }
    dispatch({
      type: LOADED_EVENT,
      payload: data
    })
  } catch (err) {
    console.warn(JSON.stringify(err))
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
