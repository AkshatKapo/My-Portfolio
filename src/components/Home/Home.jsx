import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <div className="text-content">
          <h2>Welcome to my portfolio</h2>
          <p>
          I'm Akshat Kapoor, a dedicated fourth-year Software Engineering student. My portfolio showcases my journey through various programming languages and technologies, highlighting projects that solve complex problems and demonstrate my passion for software development. Dive in to explore my work and connect with me.
          </p>
          <div class="social-icons">
              <a href="https://github.com/yourusername" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank">
               <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto:youremail@gmail.com" target="_blank">
               <i class="fas fa-envelope"></i>
             </a>

              
          </div>
          
        </div>
        <div className="separator"></div>
        <div className="image-content">
          <img
            src="/1666144074188.jpeg"
            alt="My image"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
