import React from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (

    <div className='nav'>

 <div className='navbar-logos'>
        <img className='nav-logo-1' src='./Group 1.png' />
        <img className='nav-logo-2' src='./Group 7.png' />
        </div>

    <div className='nav-links'>
   <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>How to use</li>
   </ul>

   {/* nav button */}
<section className='nav-btn'>
<button>Log In</button>
</section>
    </div>

    </div>

    
       
    
  )
}

export default Navbar