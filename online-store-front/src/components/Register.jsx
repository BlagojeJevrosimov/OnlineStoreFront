import React, { useState } from "react";
import { RegisterUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import RegisterUserForm from "../models/RegisterUserForm";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [role, setRole] = useState(0);

  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(Number(event.target.value));
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleProfilePhotoChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedPhoto = event.target.files[0];
      setProfilePhoto(selectedPhoto);
    }
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const handleRegister = async () => {
    if(repeatPassword === password){
    const user = new RegisterUserForm(username,email,password,firstName,lastName,dateOfBirth,address,role,profilePhoto)
    const ret = await RegisterUser(user);
    if (ret) {
      navigate("/login");
    }
    }
    else{
      alert('Passwords do not match.')
      return;
    }

  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>{" "}
      <div>
        <label>Repeat Password:</label>
        <input
          type="password"
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
      <label htmlFor="dateInput">Birth date:</label>
      <input
        type="date"
        id="dateInput"
        value={dateOfBirth}
        onChange={handleDateOfBirthChange}
      />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={handleAddressChange} />
      </div>
      <div>
        <label>Profile Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePhotoChange}
        />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="0">Customer</option>
          <option value="1">Salesman</option>
        </select>
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
