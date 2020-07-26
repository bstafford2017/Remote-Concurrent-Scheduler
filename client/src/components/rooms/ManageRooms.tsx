import React from 'react'
import Alert from '../common/Alert'
import CreateRoom from '../rooms/CreateRoom'
import Room from '../rooms/Room'
import { IRoom } from '../../types'

const ManageRooms = (props: any) => {
  const { rooms } = props
  return (
    <>
      <Alert />
      <CreateRoom />
      {rooms.forEach((r: IRoom) => (
        <Room room={r} />
      ))}
    </>
  )
}

export default ManageRooms
