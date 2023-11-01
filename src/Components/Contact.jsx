import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import MapChart from './MapChart';

function Contact() {
 const[success,setSuccess] =useState(null);

const formRef= useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_96b50mg', 'template_o7k8wg3', formRef.current, 'I5B71wGF1_1fbTXv8')
    .then((result) => {
        console.log(result.text);
        setSuccess(true);
    }, (error) => {
        console.log(error.text);
        setSuccess(false);
    });
  };

  return (
    <div className='c'> 
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Contact us</h1>
        <form className="c-form" onSubmit={handleSubmit} ref={formRef}>
          <input name='user-name' type="text" placeholder="Name" className="c-name" />
          <input name='user-email' type="text" placeholder="Email" className="c-mail" />
          <textarea name="message" placeholder="Write your message" id="" cols="30" rows="10" className="c-mess"></textarea>
          <button className="c-butt" type='Submit'>Send</button>
        {success&& "Form was sent successifully"}
        </form>
      </div>
      <div className="c-right">
        <MapChart/>
      </div>
    </div>
    </div>
  )
}

export default Contact 