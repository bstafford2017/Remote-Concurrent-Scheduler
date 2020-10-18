import React from 'react'
import { Col, FormGroup, Label, Input } from 'reactstrap'

const Filter = (props: any) => {
  return (
    <div id='filter' className='form-row pb-3' style={{ margin: 0 }}>
      <Col xs={{ size: 3, offset: 3 }}>
        <FormGroup>
          <Label for='filter-building'>Building</Label>
          <Input
            type='select'
            id='filter-building'
            defaultValue='default'
            style={{ color: 'white' }}
          >
            <option value='default' disabled={true} hidden={true}>
              All Buildings
            </option>
          </Input>
        </FormGroup>
      </Col>
      <Col xs={{ size: 3, offset: 1 }}>
        <FormGroup>
          <Label for='filter-room'>Room</Label>
          <Input
            type='select'
            id='filter-room'
            defaultValue='default'
            style={{ color: 'white' }}
          >
            <option value='default' disabled={true} hidden={true}>
              All Rooms
            </option>
          </Input>
        </FormGroup>
      </Col>
    </div>
  )
}

export default Filter
