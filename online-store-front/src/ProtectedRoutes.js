import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

function ProtectedRoutes (){
const token = localStorage.getItem('token');
if(!token){
    return <Navigate to='/login'/>
}
else{
    const decoded = jwt_decode(token);
    const expiration_date = decoded.exp
    const current_time=Math.floor(Date.now() / 1000)
    
    if(expiration_date < current_time){
        return <Navigate to='/login'/>
    }
    return<Outlet></Outlet>
}

}export default ProtectedRoutes;
