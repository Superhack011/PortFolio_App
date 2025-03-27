import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/EditProfile.css"; // Importing styles

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });

  const [message, setMessage] = useState(""); // Message for feedback
  const navigate = useNavigate(); // For navigation after updating

  // Fetch current profile data when component mounts
  useEffect(() => {
    axios.get("http://localhost:5000/profile")
      .then(response => setProfile(response.data))
      .catch(error => console.error("Error fetching profile:", error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/profile", profile)
      .then(response => {
        setMessage("Profile updated successfully!");
        setTimeout(() => navigate("/profile"), 2000); // Redirect after 2s
      })
      .catch(error => {
        console.error("Error updating profile:", error);
        setMessage("Failed to update profile.");
      });
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      {message && <p className="message">{message}</p>}
      
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={profile.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="text" name="phone" value={profile.phone} onChange={handleChange} required />

        <label>Bio:</label>
        <textarea name="bio" value={profile.bio} onChange={handleChange} />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
