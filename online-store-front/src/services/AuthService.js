import axiosUserInstance from "./AxiosProvider";
import jwt_decode from 'jwt-decode';

async function LoginUser(email, password) {
  try {
    const response = await axiosUserInstance.post("login", {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem("token", data.jwtToken);
      return true;
    }
  } catch (error) {
    alert(error.response.data);
    return false;
  }
}
async function RegisterUser(user) {
  try {
    const response = await axiosUserInstance.post("register", user);
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    alert(error.response.data);
    return false;
  }
}

function IsLoggedIn() {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  } else {
    const decoded = jwt_decode(token);
    const expiration_date = decoded.exp;
    const current_time = Math.floor(Date.now() / 1000);

    if (expiration_date < current_time) {
      return false;
    }
   return true; 
  }
}
export { LoginUser, RegisterUser, IsLoggedIn };
