import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Profile from "./components/Profile";
import AddProjects from "./components/AddProjects";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-project" element={<AddProjects />} />
        <Route path="/skills" element={< Skills/>} />
      </Routes>
    </div>
  );
};

export default App;
