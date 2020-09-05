import React from 'react'
import Filter from './Filter'
import Table from './Table'
import { IEvent } from '../../types'

const Home = (props: any) => {
  const toggleDisplay = { props }

  const events: IEvent[] = [
    {
      id: 1,
      title: 'meeting',
      date: '2020-02-31',
      startTime: '10:00:00',
      endTime: '11:00:00',
      room: {
        number: '123',
        seats: 23,
        projector: true,
        building: 'Upson'
      },
      user: {
        id: 123,
        username: 'ben',
        password: 'ben',
        fname: 'benjamin',
        lname: 'stafford',
        admin: true
      }
    }
  ]

  return (
    <>
      <Filter toggleDisplay={toggleDisplay} />
      <Table byMonth={true} events={events} />
    </>
  )
}

export default Home
