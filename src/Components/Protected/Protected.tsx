import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Protected() {

  let auth = localStorage.getItem("token");




  return (
   
    auth ? <Outlet/> : <Navigate to='/login'/>
  );
}

export default Protected;
