import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1 className='title'>AK</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="/assets/Akshat_Kapoor_Resume.pdf">Resume</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header