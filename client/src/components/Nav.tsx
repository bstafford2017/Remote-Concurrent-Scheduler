import React from 'react'
import {} from 'reactstrap'

const Nav = () => {
  return (
    <>
      <div className='navbar-header'>
        <a href='./calendar.html'>
          <img className='logo img-fluid' src='images/new_logo.png' />
        </a>
      </div>
      <nav className='navbar navbar-expand-md navbar-dark'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span
            className='navbar-toggler-icon'
            style={{ color: 'white' }}
          ></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul id='left-nav' className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='calendar.html'>
                Home<span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='search.html'>
                Search
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='settings.html'>
                Settings
              </a>
            </li>
          </ul>
          <ul id='right-nav' className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a id='signout' className='nav-link' href='#'>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
