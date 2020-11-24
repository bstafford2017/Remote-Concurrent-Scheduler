import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Filter from './Filter'
import { loadEvents } from '../../actions/event'
import { IEvent } from '../../types'

const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
}

interface IProps {
  events: IEvent[]
  building: string
  room: string
  byMonth: boolean
}

const Table = ({ events, byMonth, building, room }: IProps) => {
  const [date, setDate]: [Date, Function] = useState(new Date())
  const [listOfDates, setListOfDates]: [Date[], Function] = useState([])

  useEffect(() => {
    loadEvents()
    if (byMonth) {
      const startDate = new Date(date.getFullYear(), date.getMonth(), 0)
      const days = getDaysInMonth(date)
      for (let i = 0; i < days; i++) {
        startDate.setDate(startDate.getDate() + 1)
        setListOfDates((arr: Date[]) => [...arr, new Date(startDate)])
      }
    } else {
      for (let i = 0; i < 7; i++) {
        date.setDate(date.getDate() + 1)
        setListOfDates((arr: Date[]) => [...arr, new Date(date)])
      }
    }
  }, [])

  return (
    <div className='calendar-table'>
      {byMonth ? null : (
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
      )}
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
            <div className='row'>
              {listOfDates
                .filter((date, index) => index < 7)
                .map((d) => (
                  <div key={date.toISOString()} className='valid'>
                    {d.getDate()}
                  </div>
                ))}
            </div>
            <div className='row'>
              {listOfDates
                .filter((date, index) => index <= 14 && index > 7)
                .map((d) => (
                  <div className='valid'>{d.getDate()}</div>
                ))}
            </div>
            <div className='row'>
              {listOfDates
                .filter((date, index) => index <= 21 && index > 14)
                .map((d) => (
                  <div className='valid'>{d.getDate()}</div>
                ))}
            </div>
            <div className='row'>
              {listOfDates
                .filter((date, index) => index > 21)
                .map((d) => (
                  <div className='valid'>{d.getDate()}</div>
                ))}
            </div>
            {/* {events.map((e: IEvent) => (
              <Event key={e.id} byMonth={true} event={e} />
            ))} */}
          </div>
        ) : (
          <>
            <Filter />
            <div className='week-by-week'>
              {/* {events.map((e: IEvent) => (
                <Event key={e.id} byMonth={false} event={e} />
              ))} */}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  events: state.event.events,
  building: state.select.building,
  room: state.select.room,
  byMonth: state.select.byMonth
})

const mapDispatchToProps = {
  loadEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
