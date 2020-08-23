import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props: any) => {
  const { absolute } = props
  return (
    <Link to="home">
      <img
        className="logo img-fluid"
        src="images/new_logo.png"
        alt="University of North Dakota"
        style={{ position: absolute ? 'absolute' : undefined }}
      />
    </Link>
  )
}

export default Banner
