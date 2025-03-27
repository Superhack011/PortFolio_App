import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/projects")
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Repo</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
