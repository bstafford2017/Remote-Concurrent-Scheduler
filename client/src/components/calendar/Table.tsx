import React from 'react'
import { IEvent } from '../../types'
import Event from './Event'

const Table = (props: any) => {
  const { events, byMonth } = props

  return (
    <div className='table'>
      <div className='scale'>
        <div>6a</div>
        <div>7a</div>
        <div>8a</div>
        <div>9a</div>
        <div>10a</div>
        <div>11a</div>
        <div>12p</div>
        <div>1p</div>
        <div>2p</div>
        <div>3p</div>
        <div>4p</div>
        <div>5p</div>
        <div>6p</div>
        <div>7p</div>
      </div>
      <div className='main-content'>
        <div className='header'>
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
        {byMonth ? (
          <div className='month-by-month'>
            {events.forEach((e: IEvent) => (
              <Event byMonth={true} event={e} />
            ))}
          </div>
        ) : (
          <div className='week-by-week'>
            {events.forEach((e: IEvent) => (
              <Event byMonth={false} event={e} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Table
