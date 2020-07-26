import React from 'react'

const Spinner = () => {
  return (
    <div className='text-center col-12' id='spinner'>
      <div
        className='spinner-border text-success'
        role='status'
        style={{ width: '3rem', height: '3rem' }}
      >
        <span className='sr-only'>loading...</span>
      </div>
    </div>
  )
}

export default Spinner
