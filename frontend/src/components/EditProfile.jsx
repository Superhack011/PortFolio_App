import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../api';

const EditProfile = () => {
    const [profile, setProfile] = useState({ name: '', email: '', phone: '', bio: '' });

    useEffect(() => {
        getProfile().then(data => setProfile(data)).catch(() => {});
    }, []);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfile(profile);
        alert("Profile updated successfully!");
    };

    return (
        <div className="container mt-4">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
                <input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" />
                <textarea name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio"></textarea>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default EditProfile;
