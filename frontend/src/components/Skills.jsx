import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    useEffect(() => {
        axios.get("http://localhost:5000/skills")
          .then(response => setProjects(response.data))
          .catch(error => console.error("Error fetching projects:", error));
      }, []);

    const handleAddSkill = async () => {
        if (newSkill.trim()) {
            await addSkill(newSkill);
            setSkills([...skills, { name: newSkill }]);
            setNewSkill('');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Skills</h2>
            <ul>{skills.map((skill, index) => <li key={index}>{skill.name}</li>)}</ul>
            <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Add new skill" />
            <button onClick={handleAddSkill}>Add</button>
        </div>
    );
};

export default Skills;
