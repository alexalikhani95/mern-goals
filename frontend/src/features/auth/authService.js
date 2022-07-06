import axios from "axios";

const API_URL = "/api/users/"; // added proxy for this endpoint to package.json so it knows where to get this endpoint

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data)); // turning to string as it has to be a string in local storage
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;