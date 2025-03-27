const API_BASE_URL = "http://127.0.0.1:5000"; // Change this if backend is deployed

// Function to fetch user profile
export const getUserProfile = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/profile`);
    if (!response.ok) throw new Error("Failed to fetch profile");
    return await response.json();
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};


export const addProject = async (projectData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/add-project`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });
    if (!response.ok) throw new Error("Failed to add project");
    return await response.json();
  } catch (error) {
    console.error("Error adding project:", error);
    return null;
  }
};
