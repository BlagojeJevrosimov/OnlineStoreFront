import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_API_URL,
  //baseURL: "https://sibojlo.onrender.com/",
  // Other configurations
});

export default axiosInstance;