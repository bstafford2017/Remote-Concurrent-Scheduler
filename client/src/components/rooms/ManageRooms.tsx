import React from 'react'
import {
  Col,
  Card,
  CardBody,
  Table,
  Form,
  FormGroup,
  FormText,
  Label,
  Input
} from 'reactstrap'
import Alert from '../common/CustomAlert'
import CreateRoom from '../rooms/CreateRoom'
import Room from '../rooms/Room'
import { IRoom, IBuilding } from '../../types'

const ManageRooms = (props: any) => {
  // const { rooms, buildings } = props
  const rooms: IRoom[] = [
    {
      number: '21',
      seats: 2,
      projector: true,
      building: 'sas'
    },
    {
      number: '22',
      seats: 2,
      projector: true,
      building: 'as'
    }
  ]
  const buildings: IBuilding[] = [
    {
      name: 'test'
    },
    {
      name: 'test'
    }
  ]
  return (
    <>
      <Alert display={false} text={''} />
      <CreateRoom />
      <Col lg={{ size: 8, offset: 2 }}>
        <Card>
          <h2 style={{ textAlign: 'center' }}>Manage Rooms</h2>
          <FormText color='muted' style={{ textAlign: 'center' }}>
            Note: All special characters will be removed
          </FormText>
          <CardBody>
            <Form>
              <Col xs={{ size: 5, offset: 4 }}>
                <FormGroup>
                  <Label for='building'>Building</Label>
                  <Input type='select' id='building'>
                    {buildings.map((b: IBuilding) => (
                      <option>{b.name}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Form>
            <Table responsive={true}>
              <thead>
                <tr>
                  <th scope='col'>Room #</th>
                  <th scope='col'>Seats</th>
                  <th scope='col'>Projector</th>
                  <th scope='col'></th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((r: IRoom) => (
                  <Room room={r} />
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default ManageRooms