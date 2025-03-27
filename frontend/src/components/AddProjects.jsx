import React, { useState } from "react";
import axios from "axios";

const AddProject = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    techStack: "",
    repoLink: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/projects", project)
      .then(() => setProject({ title: "", description: "", techStack: "", repoLink: "" }))
      .catch(error => console.error("Error adding project:", error));
  };

  return (
    <div className="add-project">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Project Title" value={project.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Project Description" value={project.description} onChange={handleChange} required />
        <input type="text" name="techStack" placeholder="Tech Stack (comma-separated)" value={project.techStack} onChange={handleChange} required />
        <input type="text" name="repoLink" placeholder="Repository Link" value={project.repoLink} onChange={handleChange} />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
