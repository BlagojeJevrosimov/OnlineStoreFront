import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthedRoutes from "./AuthedRoutes";
import ViewProduct from "./components/ViewProduct";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleLogout(){
    setLoggedIn(false);
    localStorage.removeItem('token');
  }
  function handleLogin(){
    setLoggedIn(true);
  }
  return (
    <>
      {loggedIn ? <Navbar handleLogout = {handleLogout}/> : <></>}
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<h1>HOME</h1>}/>
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/view" element={<ViewProduct />} />
        </Route>
        <Route element={<AuthedRoutes/>}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
