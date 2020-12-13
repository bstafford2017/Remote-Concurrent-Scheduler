import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CREATE_MODAL_URL, VIEW_MODAL_URL } from '../routes'
import { IRoom, IBuilding } from '../../types'

interface IProps {
  display: boolean
  toggle: (e: React.MouseEvent) => void
}

const MenuModal = ({ display, toggle }: IProps) => {
  const buildings: IBuilding[] = []
  const rooms: IRoom[] = []

  const dates = (
    <>
      <option selected disabled hidden>
        Select
      </option>
      <option value='6:00'>6:00 am</option>
      <option value='7:00'>7:00 am</option>
      <option value='8:00'>8:00 am</option>
      <option value='9:00'>9:00 am</option>
      <option value='10:00'>10:00 am</option>
      <option value='11:00'>11:00 am</option>
      <option value='12:00'>12:00 pm</option>
      <option value='13:00'>1:00 pm</option>
      <option value='14:00'>2:00 pm</option>
      <option value='15:00'>3:00 pm</option>
      <option value='16:00'>4:00 pm</option>
      <option value='17:00'>5:00 pm</option>
      <option value='18:00'>6:00 pm</option>
      <option value='19:00'>7:00 pm</option>
    </>
  )

  return (
    <>
      <Modal isOpen={display} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <Nav>
            <NavItem>
              <NavLink
                href={CREATE_MODAL_URL}
                style={{ color: '#009a44', cursor: 'pointer' }}
              >
                Create
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={VIEW_MODAL_URL}
                style={{ color: '#009a44', cursor: 'pointer' }}
              >
                View
              </NavLink>
            </NavItem>
          </Nav>
        </ModalHeader>
        <ModalBody>
          <Router>
            <Route path={CREATE_MODAL_URL}>
              <small className='form-text text-muted text-center'>
                Note: All special characters will be removed
              </small>
              <Form>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Label for='title'>Title</Label>
                      <Input type='text' id='title' />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for='building'>Building</Label>
                      <Input type='select' id='building'>
                        {buildings.map((b) => null)}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={5}>
                    <FormGroup>
                      <Label for='room'>Room</Label>
                      <Input type='select' id='room'>
                        {rooms.map((r) => null)}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for='date'>Date</Label>
                      <Input type='date' id='date' />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for='startTime'>Start Time</Label>
                      <Input type='select' id='startTime'>
                        {dates}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for='endTime'>End Time</Label>
                      <Input type='select' id='endTiem'>
                        {dates}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Recurrance
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Sun
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Mon
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Tues
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Wed
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Thurs
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Fri
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Sat
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <Label for='recurEnd'>End Recur Date</Label>
                    <Input type='date' id='recurEnd' />
                  </FormGroup>
                </Row>
                <Button>Close</Button>
                <Button>Create Event</Button>
              </Form>
            </Route>
            <Route path={VIEW_MODAL_URL}>
              <h3 className='view-header'></h3>
              <div id='event-list'></div>
            </Route>
          </Router>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  )
}

export default MenuModal
