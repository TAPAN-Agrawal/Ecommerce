import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AdminProtected() {

let role = localStorage.getItem('role') ;
let token = localStorage.getItem('token');




  return (
    role === '0' ? <Outlet/> : role === '1' ? <Navigate to='/adminpanel'/>:token ? <Navigate to='/'/> : <Navigate to='/login'/>
  );
}

export default AdminProtected;
