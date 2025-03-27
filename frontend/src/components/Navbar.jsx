import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/add-project">Add Project</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
