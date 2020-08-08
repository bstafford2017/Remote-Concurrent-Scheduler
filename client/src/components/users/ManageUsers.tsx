import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Table,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button
} from 'reactstrap'
import Alert from '../common/Alert'
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
      <Alert />
      <CreateUser />
      <Col lg={{ size: 6, offset: 1 }}>
        <Card>
          <h2 style={{ textAlign: 'center' }}>Manage Users</h2>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th scope='col'>Username</th>
                  <th scope='col'>Password</th>
                  <th scope='col'>First Name</th>
                  <th scope='col'>Last Name</th>
                  <th scope='col'>Admin</th>
                </tr>
              </thead>
              <tbody>
                <FormText color='muted' style={{ textAlign: 'center' }}>
                  Note: All special characters will be removed
                </FormText>
                {users.map((u: IUser) => (
                  <User user={u} />
                ))}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <Col xs={{ size: 4, offset: 1 }} sm={{ size: 2, offset: 3 }}>
              <Button>Update</Button>
            </Col>
            <Col xs={{ size: 4, offset: 1 }} sm={{ size: 2, offset: 3 }}>
              <Button>Delete</Button>
            </Col>
          </CardFooter>
        </Card>
      </Col>
    </>
  )
}

export default ManageUsers
