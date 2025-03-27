import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css"

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Sandeep Swami</h1>
        <p>Electronics & Communication Engineer | Web Developer</p>
      </div>

      <div className="info-section">
        <h2>Skills</h2>
        <p>React, Flask, Python, JavaScript, API Development</p>
        <Link to="/skills" className="btn">Know More</Link>
      </div>

      <div className="info-section">
        <h2>Projects</h2>
        <p>Alumni Web App, Job Portal, Chat System, API Integrations</p>
        <Link to="/projects" className="btn">Know More</Link>
      </div>
    </div>
  );
}

export default Home;
