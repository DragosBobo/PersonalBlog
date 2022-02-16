import React from 'react'
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src='https://images.unsplash.com/photo-1644867587931-42c13eee98ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' alt=''/>
            <p> lorjad akdbakwdbawdhb uwbd awuiwbd arvbajwdb askgdaw udahda ghdva
                ad adadad. </p>
            
             </div>
             <div className='sidebarItem'>
               <span className='sidebarTitle'> CATEGORIES</span>
               <ul>
                 <li className='sidebarListItem'>Life</li>
                 <li className='sidebarListItem'>Music</li>
                 <li className='sidebarListItem'>Style</li>
                 <li className='sidebarListItem'>Sport</li>
                 <li className='sidebarListItem'>Tech</li>
                 <li className='sidebarListItem'>Cinema</li>
               </ul>
             </div>
             <div className='sidebarItem'>
               <span className='sidebarTitle'>FOLLOW </span>
               <div className='sidebarSocial'><i class=" sidebarIcons fa-brands fa-instagram-square"></i>
       <i class="sidebarIcons fa-brands fa-facebook-square"></i>
       <i class="sidebarIcons fa-brands fa-github-square"></i></div>
             </div>
        </div>
  )
}

export default Sidebar