import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'reactstrap'

const Room = (props: any) => {
  const { room } = props

  return (
    <tr id={room.id}>
      <td>
        <Input type='text' placeholder={room.number} />
      </td>
      <td>
        <Input type='text' placeholder={room.seats} />
      </td>
      <td>
        <Input type='select'>
          <option value='0' selected={room.projector === 0}>
            False
          </option>
          <option value='1' selected={room.projector === 1}>
            True
          </option>
        </Input>
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

Room.propTypes = {
  room: PropTypes.object.isRequired
}

export default Room
