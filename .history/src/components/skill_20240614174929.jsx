import React from 'react'

function skill() {
  return (
    <div className="reveal">
      <section id="skills">
        <div className="skills-content">
          <h2>Skills</h2>
          <div className="separator"></div>
          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <i className={skill.icon}></i>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default skill