import axios from "axios";
import React from "react";

 const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_BASEURL
})

axiosInstance.interceptors.request.use((config:any)=>{
    console.log("here request", config);
    return config;
}
)

axiosInstance.interceptors.response.use((config:any)=>{
    console.log("here response", config);
    return config;
})


export default axiosInstance