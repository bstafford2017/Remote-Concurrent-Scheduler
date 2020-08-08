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

const CreateRoom = () => {
  return (
    <Col lg={{ size: 8, offset: 2 }}>
      <Card>
        <h2 style={{ textAlign: 'center' }}>Create Room</h2>
        <FormText color='muted' style={{ textAlign: 'center' }}>
          Note: All special characters will be removed
        </FormText>
        <CardBody>
          <Form>
            <Row>
              <Col xs={2}>
                <FormGroup>
                  <Label for='building'>Building</Label>
                  <Input type='select' id='building'>
                    <option selected={true} disabled={true} hidden={true}>
                      Select
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={2}>
                <FormGroup>
                  <Label for='number'>Room #</Label>
                  <Input type='text' id='number' />
                </FormGroup>
              </Col>
              <Col xs={2}>
                <FormGroup>
                  <Label for='seats'>Seats</Label>
                  <Input type='text' id='seats' />
                </FormGroup>
              </Col>
              <Col xs={2}>
                <FormGroup>
                  <Label for='projector'>Projector</Label>
                  <Input type='select' id='projector'>
                    <option disabled selected hidden>
                      Select
                    </option>
                    <option value='0'>False</option>
                    <option value='1'>True</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={2}>
                <Button id='create-room'>Create</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CreateRoom
