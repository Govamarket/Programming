import React from "react";
// import { Link } from 'react-router-dom'
import { MdOutlineLegendToggle } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
function toggleNavbar () {
  const navbarLinks = document.querySelector("nav-links");
  navbarLinks.classList.toggle("active");
}
  
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar-logos">
          <img className="nav-logo-1" src="./Group 1.png" />
          <img className="nav-logo-2" src="./Group 7.png" />
  
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
      
        </div>

        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>How to use</li>
            
          </ul>

          {/* nav button */}
          <section className="nav-btn">
            <button>Log In</button>
          </section>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
