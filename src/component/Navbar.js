import React from "react";
// import { Link } from 'react-router-dom'
import { MdOutlineLegendToggle } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  function toggleNavbar() {
    const navSlide = () => {
      const burger = document.querySelector(".burger-handle");
      const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links ul");
    
      // the toggle navigation
      burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        // Animate links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${
              index / 7 + 1.5
            }s`;
          }
        });
        // Burger animation
        burger.classList.toggle("toggle");
      });
    };
    
    navSlide();
  }

  return (
    <nav>
      <div className="nav-links">
        <div className="navbar-logos">
          <img className="nav-logo-1" src="./Group 1.png" />
          <img className="nav-logo-2" src="./Group 7.png" />
        </div>
        
        <ul>
        <li>Home</li>
            <li>About Us</li>
            <li>How to use</li>
        </ul>
           
          

          {/* nav button */}
          <section className="nav-btn">
            <button>Log In</button>
          </section>

        <div className="burger-handle">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
      </div>

     
    </nav>
  );
}

export default Navbar;
