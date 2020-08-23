import React from 'react'
import PropTypes from 'prop-types'
import { formatDate, timeConversion, weekdaysToString } from '../../utils'
import { IEvent } from '../../types'

const SearchResult = (props: any) => {
  const { event }: { event: IEvent } = props

  return (
    <tr id={event.id?.toString()}>
      <td>{event.title}</td>
      <td>{formatDate(event.date)}</td>
      <td>{timeConversion(event.startTime)}</td>
      <td>{timeConversion(event.endTime)}</td>
      <td>{event.room.building}</td>
      <td>{event.room.number}</td>
      <td>{event.recur ? weekdaysToString(event.recur?.weekdays) : '-'}</td>
      <td>{event.recur ? formatDate(event.recur?.end) : '-'}</td>
      <td>{event.user.username}</td>
    </tr>
  )
}

SearchResult.propTypes = {
  event: PropTypes.object.isRequired
}

export default SearchResult
