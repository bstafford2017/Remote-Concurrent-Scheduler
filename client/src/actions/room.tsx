import { gql, useQuery, useMutation } from '@apollo/client'
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
      type: LOADING
    })
    const response = await useQuery(gql`
      query {
        selectRooms {
          number
          projector
        }
      }
    `)
    dispatch({
      type: LOADED
    })
    dispatch({
      type: LOADED_ROOM,
      payload: response
    })
  } catch (err) {
    dispatch(returnErrors(err))
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
    dispatch(returnErrors(err))
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
    dispatch(returnErrors(err))
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
