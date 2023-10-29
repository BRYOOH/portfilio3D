import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='c'> 
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Contact us</h1>
        <form action="" className="c-form">
          <input name='name' type="text" placeholder="Name" className="c-name" />
          <input name='mail' type="text" placeholder="Email" className="c-mail" />
          <textarea placeholder="Write your message" id="" cols="30" rows="10" className="c-mess"></textarea>
          <button className="c-butt">Send</button>
        </form>
      </div>
      <div className="c-right"></div>
    </div>
    </div>
  )
}

export default Contact