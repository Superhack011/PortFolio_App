import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "show" : ""}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
