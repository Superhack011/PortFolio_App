import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AddProjects from "./components/AddProjects";
import EditProfile from "./components/EditProfile"
import "./App.css"; 

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit_profile" element={<EditProfile/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/add-project" element={<AddProjects />} />
      </Routes>
    </div>
  );
};

export default App;
