import axios from "axios";

const API_URL = "/api/goals/";

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config); // config needs to be passed as it has the authorization headers
  return response.data;
};

const goalService = {
  createGoal,
};

export default goalService;
