import React from 'react'
import './HomePage.scss'
import Body from '../Body/Body'

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className='homePage__header'>Header</div>
      <div className='homePage__navbar'>Navbar</div>
      <div className='homePage__body'><Body /></div>
    </div>
  )
}

export default HomePage
