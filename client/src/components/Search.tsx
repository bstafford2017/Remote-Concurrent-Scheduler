import React from 'react'

const Search = () => {
  return (
    <>
      <div className='card col-lg-8 offset-lg-2 shadow mb-5 rounded'>
        <div>
          <h2 style={{ textAlign: 'center' }}>Search Events</h2>
          <small className='form-text text-muted text-center'>
            Note: All special characters will be removed
          </small>
        </div>
        <div className='card-body'>
          <form>
            <div className='row'>
              <div className='form-group col-8 offset-1'>
                <input
                  type='text'
                  className='form-control'
                  id='search'
                  placeholder='Enter title, building, room, date (i.e. YYYY/DD/MM) or username'
                />
              </div>
              <button
                id='search-button'
                className='form-control btn btn-secondary col-2'
                type='submit'
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className='card col-lg-8 offset-lg-2 shadow mb-5 rounded'
        id='results'
        style={{ display: 'none' }}
      >
        <div className='card-body table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Date</th>
                <th scope='col'>Start Time</th>
                <th scope='col'>Start Time</th>
                <th scope='col'>Building</th>
                <th scope='col'>Room</th>
                <th scope='col'>Recur Weekdays</th>
                <th scope='col'>Recur End Date</th>
                <th scope='col'>Created By</th>
              </tr>
            </thead>
            <tbody id='results-list'></tbody>
          </table>
          <p
            id='#no-results'
            className='response-text'
            style={{ display: 'none' }}
          >
            No Results
          </p>
        </div>
      </div>
    </>
  )
}

export default Search
