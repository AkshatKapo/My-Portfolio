import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="reveal">
      <section id="home">
        <div className="home-content">
          <div className="text-content">
            <h3>Hello, I'm</h3>
            <h1>Akshat Kapoor</h1>
            <h4>A fourth year Software Engineering student</h4>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:youremail@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            
          </div>
        
          <div className="image-content">
            <img
              src="/assets/images/1666144074188.jpeg"
              alt="Akshat Kapoor"
              className="profile-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
