import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Profile.css"; 
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    skills: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5000/profile")
      .then(response => setProfile(response.data))
      .catch(error => console.error("Error fetching profile:", error));
  }, []);

  return (
    <div className="profile">
      <button><Link to="/edit_profile">Edit your Profile</Link></button>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
      {/* <p><strong>Skills:</strong> {profile.skills.join(", ")}</p> */}
    </div>
  );
};

export default Profile;
