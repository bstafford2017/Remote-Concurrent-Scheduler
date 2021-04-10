import { gql, useQuery, useMutation, QueryResult } from '@apollo/client'
import { setErrors } from './error'
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
      type: LOADING
    })
    const { error, data }: QueryResult = await useQuery(gql`
      query {
        room(id: ${id}) {
          id
          number
          seats
          building {
            id
            name
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
      type: LOADED_ROOM,
      payload: data
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const createRoom = (room: IRoom) => async (dispatch: Function) => {
  try {
    const response = await useMutation(gql`
      mutation {
        addRoom(
          input: {
            number: ${room.number}
            seats: ${room.seats}
            projector: ${room.projector}
            building: { id: ${room.building} }
          }
        ) {
          number
        }
      }
    `)
    dispatch({
      type: CREATE_ROOM,
      payload: response
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const updateRoom = (room: IRoom) => async (dispatch: Function) => {
  try {
    const response = await useMutation(gql`
    mutation {
      updateRoom(
        input: {
          number: ${room.number}
          seats: ${room.seats}
          projector: ${room.projector}
          building: { id: ${room.building} }
        }
      ) {
        number
      }
    }
  `)
    dispatch({
      type: UPDATE_ROOM,
      payload: response
    })
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const deleteRoom = (id: number) => async (dispatch: Function) => {
  const response = await useMutation(gql`
  mutation {
    deleteRoom(
      id: ${id}
    ) {
      number
    }
  }
`)
  dispatch({
    type: DELETE_ROOM,
    payload: response
  })
}
