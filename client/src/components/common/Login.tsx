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
import { login } from '../../actions/user'
import { useHistory } from 'react-router-dom'

const initialState: ILogin = {
  username: '',
  password: ''
}

interface IProps {
  login: Function
}

const Login = ({ login }: IProps) => {
  const history = useHistory()
  const [user, setUser]: [ILogin, Function] = useState(initialState)

  const onChange = (e: any) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  }

  const attemptLogin = (e: any) => {
    if (user.username && user.password) {
      login(user)
      history.push('/home')
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
