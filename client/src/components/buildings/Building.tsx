import React from 'react'

const Building = (props: any) => {
  const { building } = props
  return (
    <div className='building' id={building.id}>
      <input type='checkbox' className='checkbox col-1' />
      <input
        type='text'
        className='text form-control col-10 d-inline'
        value={building.name}
      />
    </div>
  )
}

export default Building
