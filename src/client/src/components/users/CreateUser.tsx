import React from 'react'
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

const CreateUser = () => {
  return (
    <Col lg={{ size: 4, offset: 1 }}>
      <Card>
        <h2 style={{ textAlign: 'center' }}>Create User</h2>
        <FormText color="muted" style={{ textAlign: 'center' }}>
          Note: All special characters will be removed
        </FormText>
        <CardBody>
          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input type="text" id="username" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" id="password" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <Label for="fname">First Name</Label>
                  <Input type="text" id="fname" />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Label for="lname">Last Name</Label>
                  <Input type="text" id="lname" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label for="admin">Administrator</Label>
                  <Input type="select" id="admin">
                    <option disabled selected hidden>
                      Select
                    </option>
                    <option value="0">False</option>
                    <option value="1">True</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 4, offset: 4 }}>
                <Button>Create</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CreateUser
