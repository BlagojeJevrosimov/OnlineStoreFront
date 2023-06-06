import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { GetUserById, ChangeUser } from "../services/UserService";

const Profile = () => {
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const decodedToken = jwt_decode(localStorage.getItem("token"));
      const user = await GetUserById(decodedToken.id);
      if (user) setUser(user);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, ":", value);
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const makeChanges = async () => {
    let changed = await ChangeUser(user);
    if (changed) fetchData();
    else alert("Changes unsuccessful.");
  };
  return (
    <>
      {user ? (
        <div>
          <h2>Profile</h2>
          <div>
            <div>
              <label htmlor="firstName">First Name:</label>
              <input
                type="text"
                value={user.firstName}
                onChange={handleChange}
                name="firstName"
                id="firstName"
              />
            </div>
            <div>
              <label htmlor="lastName">Last Name:</label>
              <input
                type="text"
                value={user.lastName}
                onChange={handleChange}
                name="lastName"
                id="lastName"
              />
            </div>
            <label htmlor="userName">Username:</label>
            <input
              type="text"
              value={user.userName}
              onChange={handleChange}
              name="userName"
              id="userName"
            />
          </div>
          <div>
            <label htmlor="password">Password:</label>
            <input
              type="password"
              value={user.password}
              onChange={handleChange}
              name="password"
              id="password"
            />
          </div>
          <div>
            <label htmlor="email">Email:</label>
            <input
              type="email"
              value={user.email}
              onChange={handleChange}
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="dateInput">Birth day:</label>
            <input
              type="date"
              id="dateInput"
              //value={user.birhtDay}
              onChange={handleChange}
              name="birhtDay"
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              value={user.address}
              onChange={handleChange}
              name="address"
              id="address"
            />
          </div>
          <div>
            <label>Profile Photo:</label>
            <input type="file" accept="image/*" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <select
              value={user.role}
              onChange={handleChange}
              name="role"
              id="role"
            >
              <option value="0">Customer</option>
              <option value="1">Salesman</option>
            </select>
          </div>
          <button onClick={makeChanges}>Confirm Changes</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Profile;
