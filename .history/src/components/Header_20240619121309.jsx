import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='reveal'>
      <header>
        <h1 className='title'>AK</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/Akshat_Kapoor_Resume.pdf">Resume</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header