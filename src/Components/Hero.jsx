import React from 'react'
import './hero.css'
import Navbar from './Navbar'
import Tech from '../photos/tech.png'

const Hero = () => {
  return (
    <div className='h'>
      <Navbar/>
      <div className="h-wrapper">
        <div className="h-left">
          <h1 className="h-title">Learn. Adapt. Grow</h1>
          <div className="h-div"> 
          <h2 className="h-abt">What we do</h2> 
          <p className="h-desc">Connect with tech professionals and work on projects</p>
          </div>
         
          <button className="h-butt">Learn More</button>
        </div>
        <div className="h-right">
          <img src={Tech} alt="" className="h-img" />
        </div>
      </div>
    </div>
  )
}

export default Hero