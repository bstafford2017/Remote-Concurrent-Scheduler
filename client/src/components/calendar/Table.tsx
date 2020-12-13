import React, { useState, useEffect } from 'react'
import {
  eachDayOfInterval,
  startOfMonth,
  lastDayOfMonth,
  startOfWeek,
  lastDayOfWeek,
  endOfWeek,
  addDays,
  isSameMonth
} from 'date-fns'
import { connect } from 'react-redux'
import Filter from './Filter'
import { loadEvents } from '../../actions/event'
import { IEvent } from '../../types'
import Event from './Event'
import MenuModal from './MenuModal'

interface IProps {
  events: IEvent[]
  building: string
  room: string
  byMonth: boolean
}

const Table = ({ events, byMonth, building, room }: IProps) => {
  const [listOfDates, setListOfDates]: [Date[], Function] = useState([])
  const [displayModal, setDisplayModal]: [boolean, Function] = useState(false)

  useEffect(() => {
    loadEvents()
    if (byMonth) {
      setListOfDates(
        eachDayOfInterval({
          start: startOfWeek(startOfMonth(new Date())),
          end: addDays(lastDayOfWeek(lastDayOfMonth(new Date())), 1)
        })
      )
    } else {
      setListOfDates(
        eachDayOfInterval({
          start: startOfWeek(new Date()),
          end: endOfWeek(new Date())
        })
      )
    }
  }, [byMonth])

  const printMonth = (d: Date) => (
    <div
      key={d.toISOString()}
      className={isSameMonth(d, new Date()) ? 'valid' : 'invalid'}
      onClick={() => setDisplayModal(!displayModal)}
    >
      {d.getDate()}
    </div>
  )

  const toggleModal = (e: React.MouseEvent) => {
    setDisplayModal(!displayModal)
  }

  if (displayModal)
    return <MenuModal display={displayModal} toggle={toggleModal} />

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
                .map((d) => printMonth(d))}
            </div>
            <div className='row'>
              {listOfDates
                .filter((date, index) => index <= 14 && index > 7)
                .map((d) => printMonth(d))}
            </div>
            <div className='row'>
              {listOfDates
                .filter((date, index) => index <= 21 && index > 14)
                .map((d) => printMonth(d))}
            </div>
            <div className='row'>
              {listOfDates
                .filter((date, index) => index <= 28 && index > 21)
                .map((d) => printMonth(d))}
            </div>
            <div className='row'>
              {listOfDates
                .filter((date, index) => index > 28)
                .map((d) => printMonth(d))}
            </div>
            {events.map((e: IEvent) => (
              <Event key={e.id} event={e} />
            ))}
          </div>
        ) : (
          <>
            <Filter />
            <div className='week-by-week'>
              {events.map((e: IEvent) => (
                <Event key={e.id} event={e} />
              ))}
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
