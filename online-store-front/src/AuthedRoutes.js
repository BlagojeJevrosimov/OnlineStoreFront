import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { IsLoggedIn } from "./services/AuthService";

function AuthedRoutes (){
const token = localStorage.getItem('token');

if(IsLoggedIn())
    return <Navigate to='/'/>
else
    return <Outlet/>
}export default AuthedRoutes;
