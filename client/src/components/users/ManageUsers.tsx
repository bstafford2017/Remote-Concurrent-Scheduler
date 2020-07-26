import React from 'react'
import Alert from '../common/Alert'
import CreateUser from './CreateUser'
import User from './User'
import { IUser } from '../../types'

const ManageUsers = (props: any) => {
  const { user } = props

  return (
    <>
      <Alert />
      <CreateUser />
      {user.forEach((u: IUser) => (
        <User user={u} />
      ))}
    </>
  )
}

export default ManageUsers
