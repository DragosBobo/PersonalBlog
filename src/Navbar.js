import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
       <div className='navbar__left'><i class="fa-brands fa-instagram-square"></i>
       <i class="fa-brands fa-facebook-square"></i>
       <i class="fa-brands fa-github-square"></i>
       
       </div>
       <div className='navbar__center'>
         <ul>
           <li>HOME</li>
           <li>ABOUT</li>
           <li>CONTACT</li>
           <li>WRITE</li>
           <li>LOGOUT</li>
         </ul>
       </div>
        <div className='navbar__right'>
          <img className='navbar__rightImg' src="https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.6435-9/118791412_3071976209577355_5883307438464837409_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=a0KZLeMGVrIAX-fPudd&_nc_ht=scontent.ftsr1-2.fna&oh=00_AT8yY5tYSElABn5ciJOrIutKJNzZwoLpxXAaRGGYmWdsZg&oe=62312668" alt="profile img"/>
        </div>
       
       



    </div>
  )
}

export default Navbar