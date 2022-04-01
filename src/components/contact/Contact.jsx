import { useState } from "react";
import "./Contact.scss"

function Contact() {
  const[message,setMessage]=useState(false);
  const handleSubmit=(e)=>{
e.preventDefault();
setMessage(true);
  };

  return (
    <div className='contact ' id='contact'>  
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} action="https://formsubmit.co/dragos.boboluta@yahoo.com" method="POST"> 
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