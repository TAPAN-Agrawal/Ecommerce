import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Protected({ Component }: any) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      toast.error("Please login");
    }
  }, []);
  if (!localStorage.getItem("token")) {
    return null;
  }
  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
