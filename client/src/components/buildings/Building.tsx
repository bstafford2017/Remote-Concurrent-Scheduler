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
import PropTypes from 'prop-types'
import { IBuilding } from '../../types'

const Building = (props: any) => {
  const { building } = props
  return (
    <div className="building" id={building.id}>
      <Form>
        <FormGroup>
          <Col xs={1}>
            <Input type="checkbox" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xs={10}>
            <Input type="text" value={building.name} />
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

Building.propTypes = {
  building: PropTypes.object.isRequired
}

export default Building
