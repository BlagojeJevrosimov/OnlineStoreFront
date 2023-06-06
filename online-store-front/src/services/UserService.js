import axiosUserInstance from "./AxiosProvider";
import jwt_decode from "jwt-decode";

const requestConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
export async function GetUserById(id) {
  try {
    const response = await axiosUserInstance.get(id, requestConfig);
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error) {
    alert(error.response.data);
    return false;
  }
}

export async function ChangeUser(user) {
  const decodedToken = jwt_decode(localStorage.getItem("token"));
  try {
    const response = await axiosUserInstance.put(
      decodedToken.id,
      user,
      requestConfig
    );
    if (response.status === 200) {
      console.log("Promenio ga");
      return true;
    } else return false;
  } catch (error) {
    console.log("Nisam uspo servis");
    return false;
  }
}
