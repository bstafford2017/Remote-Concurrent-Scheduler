import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  FormText,
  Button
} from 'reactstrap'
import Alert from '../common/CustomAlert'
import CreateBuilding from './CreateBuilding'
import Building from './Building'
import { IBuilding } from '../../types'

const ManageBuildings = (props: any) => {
  // const { buildings } = props
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
      <Row>
        <CreateBuilding />
        <Col lg={{ size: 6, offset: 1 }}>
          <Card>
            <h2 style={{ textAlign: 'center' }}>Manage Buildings</h2>
            <FormText color='muted' style={{ textAlign: 'center' }}>
              Note: All special characters will be removed
            </FormText>
            <CardBody>
              {buildings.map((b: IBuilding) => (
                <Building building={b} />
              ))}
            </CardBody>
            <CardFooter>
              <Col xs={{ size: 4, offset: 1 }} sm={{ size: 2, offset: 3 }}>
                <Button>Update</Button>
              </Col>
              <Col xs={{ size: 4, offset: 1 }} sm={{ size: 2, offset: 3 }}>
                <Button>Delete</Button>
              </Col>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ManageBuildings
