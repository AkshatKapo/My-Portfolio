import React from 'react'
import "./project.css" 

const project = () => {
  return (
   
        <div>
          <section id="projects">
            <div class="project-list">
              <h2>Projects</h2>
              <div class="project-row">
                <div class="project">
                  <h3>Digit Recognizer</h3>
                  <img src="/image.jpg"></img>
                  <p>I developed a PyTorch-based neural network with a four-layer feedforward architecture to classify MNIST handwritten digits, achieving 97% accuracy. Key tasks included data preparation, model optimization, and thorough documentation. This project highlights my proficiency in machine learning.</p>
          
                    <a href="link-to-project1" class="Projectbutton">View Report</a>
                    <a href="link-to-project1" class="Projectbutton2">View Project</a>
          
                </div>
                <div class="project">
                  <h3>Next-Day Date Calculation: Java Test Case Design </h3>
                  <img src="/date.jpg"></img>
                  <p>Developed a Java program for next-day date calculation, leveraging JUnit for systematic testing. Created a comprehensive suite of test cases to validate functionality and efficiency. Prepared a detailed technical report documenting test cases, code output, and analysis.</p>
          
                  <a href="link-to-project1" class="Projectbutton">View Report</a>
                  <a href="link-to-project1" class="Projectbutton2">View Project</a>
                </div>
              </div>
              <div class="project-row">
                <div class="project">
                  <h3>Camera Motoin Sensor System</h3>
                  <img src="/moton sensor.jpg"></img>
                  <p>Collaborated with a team of 4 to craft a software project management proposal. Led the development of project plans covering risk assessment, budgeting, scheduling, and resource allocation. Employed Microsoft Project and Visual Paradigm for project scheduling and activity diagrams, while also preparing comprehensive technical documentation to support project objectives.</p>
                  <a href="link-to-project1" class="Projectbutton">View Report</a>
                  <a href="link-to-project1" class="Projectbutton2">View Project</a>
                </div>
                <div class="project">
                  <h3>Course Registeration Website</h3>
                  <img src="/coursespage.jpg"></img>
                  <p>Contributed to a team of 4 to develop a university course registration website, meeting deadlines and objectives. Leveraged HTML, CSS, JavaScript, Bootstrap, PHP, and SQL for design and functionality. Implemented key features including home, sign-up, and login pages, along with a robust database for information storage and retrieval.</p>
                  <a href="link-to-project1" class="Projectbutton">View Report</a>
                  <a href="link-to-project1" class="Projectbutton2">View Project</a>
                </div>
              </div>
            </div>
          </section>
        </div>
  )
}

export default project