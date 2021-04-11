import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  FormText,
  Button,
  Alert
} from 'reactstrap'
import CreateBuilding from './CreateBuilding'
import Building from './Building'
import { IBuilding } from '../../types'
import { loadBuildings } from '../../actions/building'

interface IProps {
  buildings: Array<IBuilding>
  loadBuildings: Function
}

const ManageBuildings = ({ buildings, loadBuildings }: IProps) => {
  useEffect(() => {
    loadBuildings()
  }, [])

  return (
    <>
      <Alert isOpen={false} text={''} />
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
                <Building key={b.id} building={b} />
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

const mapStateToProps = (state: any) => ({
  buildings: state.building.buildings
})

const mapDispatchToProps = {
  loadBuildings
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBuildings)
