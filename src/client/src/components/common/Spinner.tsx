import React from 'react'

const Spinner = () => {
  return (
    <div
      className='text-center col-12'
      id='spinner'
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        display: 'flex',
        top: 0,
        left: 0
      }}
    >
      <div
        className='spinner-border text-success'
        role='status'
        style={{
          top: '30%',
          left: '48%',
          zIndex: 1000,
          position: 'absolute',
          width: '5rem',
          height: '5rem'
        }}
      >
        <span className='sr-only'>loading...</span>
      </div>
    </div>
  )
}

export default Spinner
