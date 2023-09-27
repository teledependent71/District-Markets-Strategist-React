import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Markets Strategist</title>
        <meta property="og:title" content="District Markets Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
