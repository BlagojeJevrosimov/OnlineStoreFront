import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthedRoutes from "./AuthedRoutes";
import ViewProduct from "./components/ViewProduct";
import { IsLoggedIn } from "./services/AuthService";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  useEffect(() => {
    let ret = IsLoggedIn();
    setLoggedIn(ret);
  }, []);

  return (
    <>
      {loggedIn ? <Navbar handleLogout={handleLogout} /> : <></>}
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/" element={<h1>HOME</h1>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/view" element={<ViewProduct />} />
        </Route>
        <Route element={<AuthedRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
