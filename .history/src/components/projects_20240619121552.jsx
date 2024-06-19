import React from "react";
import "./projects.css";

const projects = () => {
  return (
    <div className="reveal">
      <section id="projects">
        <div class="project-list">
          <h2>Projects</h2>
          <div className="seperator3"></div>
          <div class="project-row">
            <div class="project">
              <h3>Digit Recognizer</h3>
              <img src="/assets/images/image.jpg"></img>
              <p>
                Developed a PyTorch-based neural network with a four-layer
                feedforward architecture to classify MNIST handwritten digits
                using Python programming language and Machine learning methods.
              </p>
              <a href="/Machine_Learning_Project.pdf" class="Projectbutton">
                View Report
              </a>
              <a href="https://github.com/AkshatKapo/Digit-Recognizer.git" class="Projectbutton2">
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
              <a href="/100781511_Akshat_Kapoor_TestDesignAssignment_NextDate.pdf" class="Projectbutton">
                View Report
              </a>
              <a href="https://github.com/AkshatKapo/NextDate-Test-Case-Design-.git" class="Projectbutton2">
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
              <a href="/SPM_Project.pdf" class="Projectbutton">
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
              <a href="/Data_Report.pdf" class="Projectbutton">
                View Report
              </a>
              <a href="link-to-project1" class="Projectbutton2">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default projects;
