import React, { useState } from 'react'
import Alert from './CustomAlert'
import { connect } from 'react-redux'
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
import { ILogin } from '../../types'
import { login } from '../../actions/userActions'

const initialState: ILogin = {
  username: '',
  password: ''
}

const Login = () => {
  const [user, setUser]: [ILogin, Function] = useState(initialState)

  console.log('login test')

  const onChange = (e: any) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  }

  const attemptLogin = () => {
    if (user.username && user.password) {
      login(user)
    }
  }

  return (
    <Col sm={{ size: 10, offset: 1 }} lg={{ size: 4, offset: 4 }}>
      <Card>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <CardBody>
          <Alert display={false} text={''} />
          <Form>
            <FormGroup>
              <Label for='username'>Username</Label>
              <Input type='text' id='username' onChange={onChange} />
            </FormGroup>
            <FormGroup>
              <Label for='password'>Password</Label>
              <Input type='password' id='password' onChange={onChange} />
            </FormGroup>
            <Col sm={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
              <Button onClick={attemptLogin}>Login</Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

Login.propTypes = {}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {
  login
}

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login
