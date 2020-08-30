import React from 'react'
import { Row, Col, Card, CardBody, Table, FormText } from 'reactstrap'
import Alert from '../common/CustomAlert'
import CreateUser from './CreateUser'
import User from './User'
import { IUser } from '../../types'

const ManageUsers = (props: any) => {
  // const { users } = props
  const users: IUser[] = [
    {
      username: 'test',
      password: 'test',
      fname: 'test',
      lname: 'test',
      admin: false
    },
    {
      username: 'test',
      password: 'test',
      fname: 'test',
      lname: 'test',
      admin: false
    }
  ]
  return (
    <>
      <Alert display={false} text={''} />
      <Row>
        <CreateUser />
        <Col lg={{ size: 6, offset: 1 }}>
          <Card>
            <h2 style={{ textAlign: 'center' }}>Manage Users</h2>
            <CardBody>
              <FormText color='muted' style={{ textAlign: 'center' }}>
                Note: All special characters will be removed
              </FormText>
              <Table responsive>
                <thead>
                  <tr>
                    <th scope='col'>Username</th>
                    <th scope='col'>Password</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Admin</th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u: IUser) => (
                    <User user={u} />
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ManageUsers
