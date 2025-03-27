import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles/Skills.css"

const Skills = () => {
    const [skills, setSkills] = useState(
        {newSkill : ""}
    );

    const [newskills, setnewskills] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/skills")
          .then(response => setnewskills(response.data))
          .catch(error => console.error("Error fetching skills:", error));
      }, []);

    const handleChange = (e) => {
        setSkills({...skills, [e.target.name] : e.target.value})
    };

    const handleAddSkill = async (e) => {
        e.preventDefault();

        if (skills.newSkill.trim() === "") return;

        axios.post("http://localhost:5000/skills", {name : skills.newSkill})
            .then(response => {
                setnewskills([...newskills, response.data]);
                setSkills({ newSkill : "" });
            })
            .catch(error => console.error("Error adding skill:", error));
    };

    return (
        <div className="container mt-4">
            <h2>Skills</h2>
            <ul>
                {newskills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                ))}
            </ul>
            <input
                type="text"
                name="newSkill"
                value={skills.newSkill}
                onChange={handleChange}
                placeholder="Add new skill"
            />
            <button onClick={handleAddSkill}>Add</button>
        </div>
    );
};

export default Skills;
