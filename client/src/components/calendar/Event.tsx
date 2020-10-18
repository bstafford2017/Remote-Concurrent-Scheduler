import React from 'react'

const Event = ({ event, byMonth }: any) => {
  return byMonth ? <div className='month-event'>{event.title}</div> : null
}

export default Event
