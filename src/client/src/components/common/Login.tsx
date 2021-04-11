import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from 'reactstrap'
import { ILogin } from '../../types'
import { login } from '../../actions/user'
import { useHistory } from 'react-router-dom'
import { setErrors, clearErrors } from '../../actions/error'

const initialState: ILogin = {
  username: '',
  password: ''
}

interface IProps {
  login: Function
  errors: string
  setErrors: Function
}

const Login = ({ login, errors, setErrors }: IProps) => {
  const history = useHistory()
  const [user, setUser]: [ILogin, Function] = useState(initialState)
  const [showAlert, setShowAlert] = useState(true)

  const onChange = (e: any) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  }

  const attemptLogin = async (e: any) => {
    e.preventDefault()
    try {
      if (user.username && user.password) {
        await login(user)
        history.push('/home')
      } else if (!user.username && user.password) {
        setErrors('Please enter a username')
      } else if (user.username && !user.password) {
        setErrors('Please enter a password')
      } else {
        setErrors('Please enter a username and password')
      }
    } catch (e) {
      setErrors(e)
      console.log(e)
    }
  }

  const clearAlert = () => {
    setShowAlert(false)
    clearErrors()
  }

  return (
    <Col
      sm={{ size: 10, offset: 1 }}
      md={{ size: 6, offset: 3 }}
      lg={{ size: 4, offset: 4 }}
    >
      <Card>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <CardBody>
          <Alert
            color='danger'
            isOpen={showAlert && !!errors}
            toggle={clearAlert}
          >
            {errors}
          </Alert>
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

const mapStateToProps = (state: any) => ({
  errors: state.error.msg
})

const mapDispatchToProps = {
  login,
  setErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
