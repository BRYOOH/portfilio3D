import React from 'react'
import './navbar.css'
import Tech from '../photos/tech.png' 
import Search from '../photos/search.png' 

const Navbar = () => {
  return (
    <div className="n">
         <div className='n-wrapper'>
             <div className="n-links">
            <img src={Tech} alt="" className="n-img" />
            <ul className="n-list">
                <li className="n-item">Home</li>
                <li className="n-item">About</li>
                <li className="n-item">Works</li>
                <li className="n-item">Contact</li>
            </ul>
            </div>
            <div className="n-icons">
                <img src={Search} alt="" className="n-search" />
                <button className="n-button">Hire Now</button>
            </div>
        </div>
    </div>
   
  )
}

export default Navbar