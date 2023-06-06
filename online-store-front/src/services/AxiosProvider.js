import axios from "axios";

const axiosUserInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_API_URL,
  // Other configurations
});

export default axiosUserInstance;