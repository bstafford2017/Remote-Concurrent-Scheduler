import React from 'react'
import Alert from '../common/Alert'
import CreateBuilding from './CreateBuilding'
import Building from './Building'
import { IBuilding } from '../../types'

const ManageBuildings = (props: any) => {
  const { buildings } = props

  return (
    <>
      <Alert />
      <CreateBuilding />
      {buildings.forEach((b: IBuilding) => (
        <Building building={b} />
      ))}
    </>
  )
}

export default ManageBuildings
