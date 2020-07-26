import React from 'react'

const CreateUser = () => {
  return (
    <div
      className='card col-lg-3 offset-lg-1 shadow mb-5 rounded'
      id='create-card'
    >
      <div>
        <h2 style={{ textAlign: 'center' }}>Create User</h2>
      </div>
      <div className='card-body'>
        <form>
          <small className='form-text text-muted text-center'>
            Note: All special characters will be removed
          </small>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' id='user-username' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='user-password'
            />
          </div>
          <div className='row'>
            <div className='form-group col-6'>
              <label htmlFor='fname'>First Name</label>
              <input type='text' className='form-control' id='user-fname' />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='lname'>Last Name</label>
              <input type='text' className='form-control' id='user-lname' />
            </div>
          </div>
          <div className='form-group form-check col-6 offset-3'>
            <label htmlFor='user-admin'>Administrator</label>
            <select className='form-control' id='user-admin'>
              <option selected={true} disabled={true} hidden={true}>
                Select
              </option>
              <option value='0'>False</option>
              <option value='1'>True</option>
            </select>
          </div>
          <button id='create-user' className='btn btn-secondary col-4 offset-4'>
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
