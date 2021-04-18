import { gql, useMutation, ApolloQueryResult } from '@apollo/client'
import { setErrors } from './error'
import {
  LOADING,
  LOADED,
  LOADED_ROOMS,
  CREATE_ROOM,
  UPDATE_ROOM,
  DELETE_ROOM
} from '.'
import { IRoom } from '../types'
import ApolloClient from '../apollo'

export const loadRooms = (id: number) => async (dispatch: Function) => {
  try {
    const { error, data }: ApolloQueryResult<any> = await ApolloClient.query({
      query: gql`
        query($id: String!) {
          room(id: $id) {
            id
            number
            seats
            projector
            building {
              id
              name
            }
          }
        }
      `,
      variables: {
        id
      }
    })
    if (error) {
      console.warn(JSON.stringify(error))
      dispatch(setErrors(error.message))
    } else {
      if (data) {
        dispatch({
          type: LOADED
        })
        dispatch({
          type: LOADED_ROOMS,
          payload: data.rooms
        })
      } else {
        dispatch(setErrors('Invalid credentials'))
      }
    }
  } catch (e) {
    console.warn(e)
    dispatch(setErrors(e.message))
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
