import React from 'react'
import Banner from '../common/Banner'
import { Link, useLocation } from 'react-router-dom'
import Navigation from '../common/Navigation'

interface IHeaderProps {
  next: (event: React.MouseEvent) => void
  previous: (event: React.MouseEvent) => void
  isAuthenticated: boolean
  isAdmin: boolean
}

const Header = ({ isAuthenticated, isAdmin, next, previous }: IHeaderProps) => {
  const location: any = useLocation()

  return location.pathname === '/home' ? (
    <>
      <div className='navbar-header'>
        <Banner absolute />
        <div className='month'>
          <ul>
            <li id='month'>January</li>
            <li id='prev' className='change'>
              <Link to='#' onClick={previous}>
                &#10094;
              </Link>
            </li>
            <li style={{ fontSize: '17px' }}>
              <input id='by-week' type='radio' name='selector' value='week' />
              <label htmlFor='by-week'> By Week</label>
              <input
                id='by-month'
                type='radio'
                name='selector'
                value='month'
                defaultChecked
              />
              <label htmlFor='by-month'> By Month</label>
            </li>
            <li id='next' className='change'>
              <Link to='#' onClick={next}>
                &#10095;
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  ) : (
    <Navigation isAdmin={isAdmin} isAuthenticated={isAuthenticated} />
  )
}

export default Header
