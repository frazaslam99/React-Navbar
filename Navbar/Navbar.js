import React, { useState } from "react"
import "./Navbar.css"
import {Outlet, Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar' style={{ backgroundColor: "#F0F1F3" }}>
        <h3 className='logo'>Fraz</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/resume' className='Resume'>
            <li>Resume</li>
          </Link>
    
          <Link to='/contactus' className='feature'>
            <li>Contact Us</li>
          </Link>
          <Link to='/portfolio' className='feature'>
            <li>Portfolio</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>

      <Outlet />
    </>
  )
}
export default Navbar
