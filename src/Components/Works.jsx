import React from 'react'
import './works.css'

export default function Works() {

  let items=[
    'Web Development',
    'Software development',
    'Database management',
    'Game development',
    'Full-stack developer'
  ];

  return (
    <div className='w'>
      <div className="w-left">
        <ul className="w-list">
          {items.map((item) => (
          <li className="w-item" key={item} data-content={item} >{item} </li>
          )  
          )}
           </ul>
      </div>
      <div className="w-right"></div>
    </div>
  )
}
