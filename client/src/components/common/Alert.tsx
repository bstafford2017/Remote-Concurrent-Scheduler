import React from 'react'

const Alert = (props: any) => {
  const { display, hide, text } = props

  return display ? (
    <div
      className='alert alert-dismissible fade show'
      style={{ display: 'none' }}
      role='alert'
      id='alert'
    >
      <span id='alert-text'>{text}</span>
      <button type='button' className='close' onClick={hide} aria-label='close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  ) : null
}

export default Alert
