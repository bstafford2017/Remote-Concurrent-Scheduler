import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardBody, Table, FormText, Alert } from 'reactstrap'
import CreateUser from './CreateUser'
import User from './User'
import { IUser } from '../../types'
import { loadUsers } from '../../actions/user'

interface IProps {
  users: []
  loadUsers: Function
}

const ManageUsers = ({ users, loadUsers }: IProps) => {
  useEffect(() => {
    loadUsers()
  }, [])
  return (
    <>
      <Alert isOpen={false} text={''} />
      <Row>
        <CreateUser />
        <Col lg={{ size: 6, offset: 1 }}>
          <Card>
            <h2 style={{ textAlign: 'center' }}>Manage Users</h2>
            <FormText color='muted' style={{ textAlign: 'center' }}>
              Note: All special characters will be removed
            </FormText>
            <CardBody>
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

const mapStateToProps = (state: any) => ({
  users: state.user.users
})

const mapDispatchToProps = {
  loadUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers)
