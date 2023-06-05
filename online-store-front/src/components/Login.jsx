import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginUser } from "../services/AuthService";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    console.log(process.env.REACT_APP_USER_API_URL);
    const success = await LoginUser(email, password);
    if (success) {
      props.handleLogin();
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
