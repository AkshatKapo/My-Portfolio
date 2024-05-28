import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Job Title 1</h3>
          <h4>Company Name</h4>
          <p><strong>Duration:</strong> Jan 2020 - Present</p>
          <p>Job description and responsibilities for the first job.</p>
        </div>
        <div className="experience-item">
          <h3>Job Title 2</h3>
          <h4>Company Name</h4>
          <p><strong>Duration:</strong> Jan 2018 - Dec 2019</p>
          <p>Job description and responsibilities for the second job.</p>
        </div>
      </div>
    </section>
  )
}

export default Experience