import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  let auth = localStorage.getItem("token");

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected;
