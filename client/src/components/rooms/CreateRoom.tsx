import React from 'react'

const CreateRoom = () => {
  return (
    <div
      className='card col-lg-8 offset-lg-2 shadow mb-5 rounded'
      id='create-card'
    >
      <div>
        <h2 style={{ textAlign: 'center' }}>Create Room</h2>
        <small className='form-text text-muted text-center'>
          Note: All special characters will be removed
        </small>
      </div>
      <div className='card-body'>
        <form className='form row offset-1'>
          <div className='form-group col-2'>
            <label htmlFor='building'>Building</label>
            <select className='form-control' id='building'>
              <option selected={true} disabled={true} hidden={true}>
                Select
              </option>
            </select>
          </div>
          <div className='form-group col-2'>
            <label htmlFor='number'>Room #</label>
            <input type='text' className='form-control' id='number' />
          </div>
          <div className='form-group col-2'>
            <label htmlFor='seats'>Seats</label>
            <input type='text' className='form-control' id='seats' />
          </div>
          <div className='form-group col-2'>
            <label htmlFor='projector'>Projector</label>
            <select className='form-control' id='projector'>
              <option selected={true} disabled={true} hidden={true}>
                Select
              </option>
              <option value='0'>False</option>
              <option value='1'>True</option>
            </select>
          </div>
          <button
            id='create-room'
            className='form-control btn btn-secondary col-2'
          >
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateRoom
