import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'reactstrap'
import { IUser } from '../../types'

const User = (props: any) => {
  const { user }: { user: IUser } = props
  return (
    <tr id={user.id?.toString() ?? 'user'}>
      <td>
        <Input type="text" value={user.username} />
      </td>
      <td>
        <Input type="password" value={user.password} />
      </td>
      <td>
        <Input type="text" value={user.fname} />
      </td>
      <td>
        <Input type="text" value={user.lname} />
      </td>
      <td>
        <Input type="select">
          <option value="0" selected={!user.admin ? true : false}>
            False
          </option>
          <option value="1" selected={user.admin ? true : false}>
            True
          </option>
        </Input>
      </td>
      <td>
        <Button className="update-room">Update</Button>
      </td>
      <td>
        <Button className="delete-room">Delete</Button>
      </td>
    </tr>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User
