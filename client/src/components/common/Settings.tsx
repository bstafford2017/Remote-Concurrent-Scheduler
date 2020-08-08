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
    fname: '',
    lname: '',
    admin: false
  })

  const { username, password, fname, lname, admin } = user

  return (
    <Col lg={{ size: 4, offset: 4 }}>
      <Card>
        <h2 style={{ textAlign: 'center' }}>User Settings</h2>
        <FormText color='muted'>
          Note: All special characters will be removed
        </FormText>
        <CardBody>
          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Label for='username'>Username</Label>
                  <Input type='text' placeholder={username} id='username' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <FormGroup>
                  <Label for='password'>Password</Label>
                  <Input type='password' placeholder={password} id='password' />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <Label for='confirmPassword'>Confirm Password</Label>
                  <Input
                    type='password'
                    placeholder={password}
                    id='confirmPassword'
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <FormGroup>
                  <Label for='firstName'>First Name</Label>
                  <Input type='text' placeholder={fname} id='firstName' />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <Label for='lastName'>Last Name</Label>
                  <Input type='text' placeholder={lname} id='lastName' />
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
                <Button>Update</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Settings
