import React from 'react'
import Header from './Header'
import Filter from './Filter'
import Table from './Table'

const Home = (props: any) => {
  const toggleDisplay = { props }

  return (
    <>
      <Header />
      <Filter toggleDisplay={toggleDisplay} />
      <Table byMonth={true} />
    </>
  )
}

export default Home
