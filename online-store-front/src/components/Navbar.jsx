import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/products/add">Add Product</Link>
          </li>
          <li className="navbar-item">
            <Link to="/products/view">New Order</Link>
          </li>
          <li className="navbar-item">
            <Link to="/history">History</Link>
          </li>
          <li className="navbar-item">
            <Link to="/verification">Verification</Link>
          </li>
          <li className="navbar-item">
            <Link to="/new-orders">New Orders</Link>
          </li>
          <li className="navbar-item">
            <Link to="/my-orders">My Orders</Link>
          </li>
          <li className="navbar-item">
            <Link to="/all-orders">All Orders</Link>
          </li>
        </ul>
        <button onClick={props.handleLogout}>Promeni Login</button>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
