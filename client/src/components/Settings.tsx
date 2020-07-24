import React, { useState } from 'react'

const Settings = () => {
  const [alert, setAlert] = useState(false)

  const closeAlert = () => {
    setAlert(false)
  }

  return (
    <div className='card col-lg-4 offset-lg-4 shadow mb-5 rounded'>
      <div>
        <h2 style={{ textAlign: 'center' }}>User Settings</h2>
        <small className='form-text text-muted text-center'>
          Note: All special characters will be removed
        </small>
      </div>
      <div className='card-body'>
        <div
          id='manage-alert'
          style={{ display: 'none' }}
          className='alert alert-danger alert-dismissible fade show'
          role='alert'
        >
          <div id='manage-alert-text'></div>
          <button
            type='button'
            className='close'
            aria-label='Close'
            onClick={closeAlert}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' id='username' />
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='password'>Password</label>
              <input type='password' className='form-control' id='password' />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                id='confirm-password'
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='fname'>First Name</label>
              <input type='text' className='form-control' id='fname' />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='lname'>Last Name</label>
              <input type='text' className='form-control' id='lname' />
            </div>
          </div>
          <div className='form-group col-6 offset-3 text-center'>
            <p id='admin'>Admininstrator: </p>
          </div>
          <button
            id='manage-user'
            className='btn btn-secondary col-4 offset-4'
            type='submit'
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Settings
