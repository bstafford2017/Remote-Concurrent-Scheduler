import React from 'react'
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormText,
  FormGroup,
  Table,
  Input,
  Button
} from 'reactstrap'
import SearchResult from './SearchResult'
import { IEvent } from '../../types'

const Search = () => {
  const results: IEvent[] = [
    {
      id: 1,
      title: 'meeting',
      date: '2020-02-31',
      startTime: '10:00:00',
      endTime: '11:00:00',
      room: {
        number: '123',
        seats: 23,
        projector: true,
        building: 'Upson'
      },
      user: {
        id: 123,
        username: 'ben',
        password: 'ben',
        fname: 'benjamin',
        lname: 'stafford',
        admin: true
      }
    }
  ]

  return (
    <>
      <Col lg={{ size: 8, offset: 2 }}>
        <Card>
          <CardHeader style={{ textAlign: 'center' }}>
            <h2>Search Events</h2>
            <FormText color="muted">
              Note: All special characters will be removed
            </FormText>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col xs={{ size: 8, offset: 1 }}>
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Enter title, building, room, date (i.e. YYYY/DD/MM) or username"
                    />
                  </FormGroup>
                </Col>
                <Col xs={{ size: 2, offset: 1 }}>
                  <FormGroup>
                    <Col xs={2}>
                      <Button>Search</Button>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col lg={{ size: 8, offset: 2 }}>
        <Card>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Date</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">Building</th>
                  <th scope="col">Room</th>
                  <th scope="col">Recur Weekdays</th>
                  <th scope="col">Recur End Date</th>
                  <th scope="col">Created By</th>
                </tr>
              </thead>
              <tbody>
                {results.map((e: IEvent) => (
                  <SearchResult event={e} />
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default Search
