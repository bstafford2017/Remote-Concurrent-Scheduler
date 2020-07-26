import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props: any) => {
  const { isAuthenticated, isAdmin } = props

  return (
    <>
      <div className='navbar-header'>
        <Link to='./calendar'>
          <img className='logo img-fluid' src='images/new_logo.png' />
        </Link>
      </div>
      {isAuthenticated ? (
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
                <Link className='nav-link' to='calendar'>
                  Home<span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='search'>
                  Search
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='settings'>
                  Settings
                </Link>
              </li>
              {isAdmin ? (
                <>
                  <li className='nav-item'>
                    <Link className='nav-link' to='manageBuildings'>
                      Manage Buildings
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='manageRooms'>
                      Manage Rooms
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='manageUsers'>
                      Manage Users
                    </Link>
                  </li>
                </>
              ) : null}
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
      ) : (
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
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home<span className='sr-only'>(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  )
}

export default Nav
