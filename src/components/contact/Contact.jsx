import emailjs from '@emailjs/browser';

import { useState } from "react";
import "./Contact.scss"

function Contact() {
  const[message,setMessage]=useState(false);
  const handleSubmit=(e)=>{
e.preventDefault();
setMessage(true);
  };
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_014nx6n', e.target, '5A-dt42cQAxP7oFg-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }).then(()=>{
        alert("Thank you , I'll respond soon ! :) ");
      })
      e.target.reset();
  }
  

  return (
    <div className='contact ' id='contact'>  
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={sendEmail} > 
          <input type="email" placeholder="Email" name="email" />
          <textarea  placeholder="Message" type="text" name="message">  </textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks , I'll reply soon</span>}
        </form>
        {/* <form action="https://formsubmit.co/dragos.boboluta@yahoo.com" method="POST">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <button type="submit">Send</button>
          </form> */}
      </div>
     
    </div>
  )
}

export default Contact