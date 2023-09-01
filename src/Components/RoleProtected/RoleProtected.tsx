import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

function RoleProtected() {
  let auth =
    localStorage.getItem("role") === "0" ||
    localStorage.getItem("role") === "1";
  let token = localStorage.getItem("token");

  return auth ? (
    <Outlet />
  ) : token ? (
    <Navigate to="/" />
  ) : (
    <Navigate to="/login" />
  );
}

export default RoleProtected;
