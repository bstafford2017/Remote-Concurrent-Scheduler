import React from 'react'
import Banner from '../common/Banner'

const Header = (props: any) => {
  const { isAuthenticated, isAdmin } = props
  return (
    <>
      <div className='navbar-header'>
        <Banner absolute />
        <div className='month'>
          <ul>
            <li id='month'>January</li>
            <li id='prev' className='change'>
              <a href='javascript:previous()'>&#10094;</a>
            </li>
            <li style={{ fontSize: '17px' }}>
              <input id='by-week' type='radio' name='selector' value='week' />
              <label htmlFor='by-week'> By Week</label>
              <input
                id='by-month'
                type='radio'
                name='selector'
                value='month'
                checked
              />
              <label htmlFor='by-month'> By Month</label>
            </li>
            <li id='next' className='change'>
              <a href='javascript:next()'>&#10095;</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
