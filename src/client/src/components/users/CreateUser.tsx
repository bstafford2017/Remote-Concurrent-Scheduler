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
    <Col lg={{ size: 6, offset: 3 }}>
      <Card>
        <h2 style={{ textAlign: 'center' }}>Create User</h2>
        <CardBody>
          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Label for='username'>Username</Label>
                  <Input type='text' id='username' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for='password'>Password</Label>
                  <Input type='password' id='password' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <Label for='fname'>First Name</Label>
                  <Input type='text' id='fname' />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Label for='lname'>Last Name</Label>
                  <Input type='text' id='lname' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label for='admin'>Administrator</Label>
                  <Input type='select' id='admin'>
                    <option disabled hidden>
                      Select
                    </option>
                    <option>False</option>
                    <option>True</option>
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
