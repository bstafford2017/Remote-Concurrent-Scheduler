import React, { useState } from 'react'
import { login } from '../actions/authActions'

const initialState = {
  username: '',
  password: ''
}

const Login = () => {
  const [user, setUser] = useState(initialState)
  const [alert, setAlert] = useState(false)

  const closeAlert = () => {
    setAlert(false)
  }

  const login = () => {
    if (user.username && user.password) {
      //login(user)
    }
  }

  return (
    <div className='content'>
      <div
        className='alert alert-dismissible fade show col-12'
        style={{ display: 'none' }}
        role='alert'
        id='alert'
      >
        <span id='alert-text'></span>
        <button
          type='button'
          className='close'
          onClick={closeAlert}
          aria-label='close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='card col-sm-10 offset-sm-1 col-lg-4 offset-lg-4 shadow mb-5 rounded'>
        <div>
          <h2 style={{ textAlign: 'center' }}>Login</h2>
        </div>
        <div className='card-body'>
          <div
            id='alert'
            style={{ display: 'none' }}
            className='alert alert-danger alert-dismissible fade show'
            role='alert'
          >
            <div id='alert-text'></div>
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
              <input
                type='text'
                className='form-control'
                id='username'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                required
              />
            </div>
            <button
              type='submit'
              id='submit'
              className='btn btn-secondary col-sm-6 offset-sm-3 col-lg-4 offset-lg-4'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
