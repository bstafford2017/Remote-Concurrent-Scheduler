import React from 'react'

const Event = (props: any) => {
  const { event, byMonth } = props
  return byMonth ? <div className='month-event'>{event.title}</div> : null
}

export default Event
