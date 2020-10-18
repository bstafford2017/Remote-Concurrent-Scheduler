import React, { useState } from 'react'
import Filter from './Filter'
import Table from './Table'

const Home = () => {
  const [byMonth, setByMonth]: [boolean, Function] = useState(true)
  const [building, setBuilding]: [string, Function] = useState('')
  const [room, setRoom]: [string, Function] = useState('')
  return (
    <>
      <Filter />
      <Table byMonth={byMonth} />
    </>
  )
}

export default Home
