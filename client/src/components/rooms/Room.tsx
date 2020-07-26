import React from 'react'

const Room = (props: any) => {
  const { room } = props

  return (
    <tr id={room.id}>
      <td>
        <input
          type='text'
          className='number form-control'
          value={room.number}
        />
      </td>
      <td>
        <input type='text' className='seats form-control' value={room.seats} />
      </td>
      <td>
        <select className='projector form-control'>
          <option value='0' selected={room.projector === 0 ? true : false}>
            False
          </option>
          <option value='1' selected={room.projector === 1 ? true : false}>
            True
          </option>
        </select>
      </td>
      <td>
        <button className='update-room btn btn-secondary'>Update</button>
      </td>
      <td>
        <button className='delete-room btn btn-secondary'>Delete</button>
      </td>
    </tr>
  )
}

export default Room
