import React, { useState } from 'react'
import Alert from './Alert'
import { login } from '../../actions/userActions'
import {
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

const initialState = {
  username: '',
  password: ''
}

const Login = () => {
  const [user, setUser] = useState(initialState)
  const [alert, setAlert] = useState(false)

  const closeAlert = () => {
    setAlert(false)
  }

  const login = () => {
    if (user.username && user.password) {
      //login(user)
    }
  }

  return (
    <Col sm={{ size: 10, offset: 1 }} lg={{ size: 4, offset: 4 }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <Card>
        <CardBody>
          <Alert />
          <Form>
            <FormGroup>
              <Label for='username'>Username</Label>
              <Input type='text' id='username' />
            </FormGroup>
            <FormGroup>
              <Label for='password'>Password</Label>
              <Input type='password' id='password' />
            </FormGroup>
            <Col sm={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
              <Button>Login</Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Login
