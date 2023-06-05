import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import AddProduct from "./components/AddProduct";

function AuthedRoutes (){
const token = localStorage.getItem('token');
if(!token){
    return<Outlet></Outlet>
}
else{
    const decoded = jwt_decode(token);
    const expiration_date = decoded.exp
    const current_time=Math.floor(Date.now() / 1000)
    
    if(expiration_date < current_time){
        //Treba da posalje zahtev za refresh tokena
        return<Outlet></Outlet>
    }
   return <Navigate to='/'/>
}

}export default AuthedRoutes;
