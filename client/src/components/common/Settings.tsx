import React, { useState } from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button
} from 'reactstrap'

const Settings = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fname: '',
    lname: '',
    admin: false
  })

  const onChange = (e: any) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  }

  const submit = () => {}

  const { username, password, fname, lname, admin } = user

  return (
    <Col lg={{ size: 6, offset: 3 }}>
      <Card>
        <h2 style={{ textAlign: 'center' }}>User Settings</h2>
        <FormText color="muted">
          Note: All special characters will be removed
        </FormText>
        <CardBody>
          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    placeholder={username}
                    id="username"
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    placeholder={password}
                    id="password"
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <Label for="confirmPassword">Confirm Password</Label>
                  <Input
                    type="password"
                    placeholder={password}
                    id="confirmPassword"
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <FormGroup>
                  <Label for="fname">First Name</Label>
                  <Input
                    type="text"
                    placeholder={fname}
                    id="fname"
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <Label for="lname">Last Name</Label>
                  <Input
                    type="text"
                    placeholder={lname}
                    id="lname"
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={{ size: 6, offset: 3 }}>
                <FormGroup check>
                  <p>Admininstrator: {admin}</p>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={{ size: 4, offset: 4 }}>
                <Button onClick={submit}>Update</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Settings
