import React from 'react'
import { formatDate, timeConversion } from '../../utils'
import { IEvent } from '../../types'

const SearchResult = (props: IEvent) => {
  const event = props

  return (
    <tr id={event.id?.toString()}>
      <td>{event.title}</td>
      <td>{formatDate(event.date)}</td>
      <td>{timeConversion(event.startTime)}</td>
      <td>{timeConversion(event.endTime)}</td>
      {/* <td>{event.name}</td>
      <td>{event.number}</td>
      <td>{weekdaysString}</td>
      <td>{event.end ? formatDate(event.end) : '-'}</td>
      <td>{event.username}</td> */}
    </tr>
  )
}

export default SearchResult
