import React from 'react'
import 

const skills = [
    { name: "Angular", icon: "fab fa-angular" },
    { name: "Python", icon: "fab fa-python" },
    { name: "C#", icon: "fas fa-code" },
    { name: "ASP.NET", icon: "fas fa-code" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "SQL Server", icon: "fas fa-database" },
    { name: "Azure", icon: "fab fa-microsoft" },
    { name: "Power BI", icon: "fas fa-chart-bar" },
  ];

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
    </div>
  )
}

export default skill