import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RoleProtected({ Component }: any) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // navigate('/login')
      //     const decodedToken = jwt.decode(token);
      //  console.log(decodedToken);
    }
  }, []);
  return (
    <>
      <Component />
    </>
  );
}

export default RoleProtected;
