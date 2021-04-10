import React from 'react'
import { connect } from 'react-redux'
import Banner from '../common/Banner'
import { Link, useLocation } from 'react-router-dom'
import { selectByMonth } from '../../actions/select'

interface IProps {
  next: (event: React.MouseEvent) => void
  previous: (event: React.MouseEvent) => void
  selectByMonth: Function
  month: string
}

const Header = ({ next, previous, selectByMonth, month }: IProps) => {
  const location: any = useLocation()

  const handleByWeek = (e: React.FormEvent<HTMLInputElement>) =>
    selectByMonth(false)

  const handleByMonth = (e: React.FormEvent<HTMLInputElement>) =>
    selectByMonth(true)

  return location.pathname === '/home' ? (
    <>
      <div className='navbar-header'>
        <Banner absolute />
        <div className='month'>
          <ul>
            <li id='month'>{month}</li>
            <li id='prev' className='change'>
              <Link to='#' onClick={previous}>
                &#10094;
              </Link>
            </li>
            <li style={{ fontSize: '17px' }}>
              <input
                id='by-week'
                type='radio'
                name='selector'
                value='week'
                onClick={handleByWeek}
              />
              <label htmlFor='by-week'> By Week</label>
              <input
                id='by-month'
                type='radio'
                name='selector'
                value='month'
                defaultChecked
                onClick={handleByMonth}
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
    <div className='navbar-header'>
      <Banner />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  month: state.select.month
})

const mapDispatchToProps = {
  selectByMonth
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
