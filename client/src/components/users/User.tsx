import React from 'react'

const User = (props: any) => {
  const { user } = props
  return (
    <tr className='user' id={user.id}>
      <td>
        <input
          type='text'
          className='username form-control'
          value={user.username}
        />
      </td>
      <td>
        <input
          type='password'
          className='password form-control'
          value={user.password}
        />
      </td>
      <td>
        <input type='text' className='fname form-control' value={user.fname} />
      </td>
      <td>
        <input type='text' className='lname form-control' value={user.lname} />
      </td>
      <td>
        <select className='admin user-cell form-control' id='manage-admin'>
          <option value='0' selected={user.admin === 0 ? true : false}>
            False
          </option>
          <option value='1' selected={user.admin === 1 ? true : false}>
            True
          </option>
        </select>
      </td>
      <td>
        <button className='update-user btn btn-secondary'>Update</button>
      </td>
      <td>
        <button className='delete-user btn btn-secondary'>Delete</button>
      </td>
    </tr>
  )
}

export default User
