import React from 'react'

const Header = () => {
  return (
    <div className='navbar-header'>
      <a href='./calendar.html'>
        <img
          className='logo img-fluid'
          src='images/new_logo.png'
          style={{ position: 'absolute' }}
        />
      </a>
      <div className='month'>
        <ul>
          <li id='month'></li>
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
  )
}

export default Header
