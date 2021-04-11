import React from 'react'
import {
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

const CreateBuilding = () => {
  return (
    <Col lg={{ size: 4, offset: 1 }}>
      <Card>
        <h2 style={{ textAlign: 'center' }}>Create Building</h2>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for='name'>Building Name</Label>
              <Input type='text' id='name' />
            </FormGroup>
            <Col xs={{ size: 4, offset: 4 }}>
              <Button>Create</Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CreateBuilding
