import React from 'react'
import { Col, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { selectBuilding, selectRoom } from '../../actions/select'

interface IProps {
  selectBuilding: Function
  selectRoom: Function
}

const Filter = ({ selectBuilding, selectRoom }: IProps) => {
  const handleBuildingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectBuilding(e.target.value)
  }

  const handleRoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectRoom(e.target.value)
  }

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
            onChange={handleBuildingChange}
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
            onChange={handleRoomChange}
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

const mapDispathToProps = {
  selectBuilding,
  selectRoom
}

export default connect(null, mapDispathToProps)(Filter)
