import React from 'react'

const CreateBuilding = () => {
  return (
    <div
      className='card col-lg-4 offset-lg-1 shadow mb-5 rounded'
      id='create-card'
    >
      <div>
        <h2 style={{ textAlign: 'center' }}>Create Building</h2>
        <small className='form-text text-muted text-center'>
          Note: All special characters will be removed
        </small>
      </div>
      <div className='card-body'>
        <form>
          <div className='form-group'>
            <label htmlFor='building-name'>Building Name</label>
            <input
              type='text'
              className='form-control'
              id='building-name'
              required
            />
          </div>
          <button
            id='create-building'
            className='btn btn-secondary col-4 offset-4'
          >
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateBuilding
