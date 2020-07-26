import React from 'react'

const Filter = (props: any) => {
  const { toggleDisplay } = props

  return (
    <div
      id='filter'
      className='form-row pb-3'
      style={{ display: 'none', margin: 0 }}
    >
      <div className='form-group col-3 offset-3'>
        <label htmlFor='filter-building' style={{ color: 'white' }}>
          Building
        </label>
        <select id='filter-building' className='form-control'>
          <option selected disabled hidden>
            All Buildings
          </option>
        </select>
      </div>
      <div className='form-group col-3 offset-1'>
        <label htmlFor='filter-room' style={{ color: 'white' }}>
          Room
        </label>
        <select id='filter-room' className='form-control'>
          <option selected disabled hidden>
            All Rooms
          </option>
        </select>
      </div>
    </div>
  )
}

export default Filter
