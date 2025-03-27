import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles/Projects.css"; // Importing the modern CSS file

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="projects-container">
      <div className="header">
        <h2>My Projects</h2>
        <Link to="/add-project" className="add-project-btn">
          + Add Project
        </Link>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-header">
              <h3>{project.title}</h3>
            </div>
            <p className="description">{project.description}</p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                project.repoLink || "github.com"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              🔗 View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
