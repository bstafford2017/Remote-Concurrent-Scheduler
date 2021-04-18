import React, { useState } from 'react'
import { Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { IBuilding } from '../../types'

interface IProps {
  building: IBuilding
}

const Building = ({ building }: IProps) => {
  const [name, setName] = useState(building.name)

  const onChange = (e: any) => {
    setName(e.target.value)
  }

  return (
    <tr>
      <td>
        <Input type='text' value={name} onChange={onChange} />
      </td>
      <td>
        <Button className='update-room'>Update</Button>
      </td>
      <td>
        <Button className='delete-room'>Delete</Button>
      </td>
    </tr>
  )
}

Building.propTypes = {
  building: PropTypes.object.isRequired
}

export default Building
