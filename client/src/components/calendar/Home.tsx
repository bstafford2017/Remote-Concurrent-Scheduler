import React, { useState } from 'react'
import Table from './Table'
import { brotliDecompressSync } from 'zlib'

const Home = () => {
  return (
    <>
      <Table />
    </>
  )
}

export default Home
