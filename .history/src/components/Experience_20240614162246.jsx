import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className="reveal">
      <section id="experience">
        <div className="experience-content">
          <h2>Experience</h2>
          <div className="divider"></div>
          <div>
            <h3>Software Developer Co-op Student</h3>
            <h4>Ontario Power Generation</h4>
            <p>
              <strong>Duration:</strong> May 2023 - December 2023
            </p>
            <ul>
              <li>Developed an operational oversight web application using ASP.NET, C#, Angular, HTML, CSS, JavaScript, Microsoft SQL Server, and Azure Repos for real-time monitoring and decision-making.</li>
              <li>Designed, coded, and implemented a program for early notification of dormant projects using Python, Microsoft SQL Server, and Excel VBA, significantly reducing project stagnation and improving resource allocation proficiency.</li>
              <li>Developed a user-friendly Power App for the procedures team, simplifying the request process and improving task management efficiency.</li>
              <li>Created and deployed Power BI dashboards, transforming data analysis and enabling faster, informed decision-making across departments.</li>
              <li>Authored Project Charter for a major $10 million Main Control Room renovation project in a Nuclear Power Plant.</li>
              <li>Prepared and delivered team safety presentations during dedicated team safety meetings.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience