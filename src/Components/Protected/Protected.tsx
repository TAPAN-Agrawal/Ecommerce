import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({Component}:any) {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login')
        }
    },[])
  return <>
        <Component/>
  </>;
}

export default Protected;
