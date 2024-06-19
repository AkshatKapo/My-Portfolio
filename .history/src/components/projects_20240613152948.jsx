import React from "react";
import "./projects.css";

const projects = () => {
  return (
    <section id="projects">
      <div class="project-list">
        <h2>Projects</h2>
        <div className="seperator"></div>
        <div class="project-row">
          <div class="project">
            <h3>Digit Recognizer</h3>
            <img src="/assets/images/image.jpg"></img>
            <p>
              Developed a PyTorch-based neural network with a four-layer
              feedforward architecture to classify MNIST handwritten digits
              using Python programming language and Machine learning methods.
            </p>
            <a href="/Machine_Learning _FinalProject.pdf" class="Projectbutton">
              View Report
            </a>
            <a href="link-to-project1" class="Projectbutton2">
              View Project
            </a>
          </div>
          <div class="project">
            <h3>Next-Day Date Calculation: Java Test Case Design </h3>
            <img src="/assets/images/date.jpg"></img>
            <p>
              Developed a Java program for next-day date calculation, leveraging
              JUnit for systematic testing.{" "}
            </p>
            <a href="link-to-project1" class="Projectbutton">
              View Report
            </a>
            <a href="link-to-project1" class="Projectbutton2">
              View Project
            </a>
          </div>
        </div>
        <div class="project-row">
          <div class="project">
            <h3>Camera Motoin Sensor System</h3>
            <img src="/assets/images/moton sensor.jpg"></img>
            <p>
              Developed a software project management project related to a
              camera motion sensor system, which includes creating project plans and techncal documents.
            </p>
            <a href="link-to-project1" class="Projectbutton">
              View Report
            </a>
            <a href="link-to-project1" class="Projectbutton2">
              View Project
            </a>
          </div>
          <div class="project">
            <h3>Course Registeration Website</h3>
            <img src="/assets/images/coursespage.jpg"></img>
            <p>
              Developed a university course registration website,
              meeting deadlines and objectives using HTML, CSS, JavaScript,
              Bootstrap, PHP, and SQL for design and functionality. 
            </p>
            <a href="link-to-project1" class="Projectbutton">
              View Report
            </a>
            <a href="link-to-project1" class="Projectbutton2">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
