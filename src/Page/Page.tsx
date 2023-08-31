import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AdminPanel from "../Components/Admin/AdminPanel/AdminPanel";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/User/Home/Home";
import Notfound from "../Components/Notfound/Notfound";
import Detail from "../Components/User/Detail/Detail";
import Cart from "../Components/User/Cart/Cart";
import Purchased from "../Components/User/Purchased/Purchased";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protected from "../Components/Protected/Protected";
import RoleProtected from "../Components/RoleProtected/RoleProtected";
import SearchedProduct from "../Components/User/SearchedProduct/SearchedProduct";
import Checkout from "../Components/User/Checkout/Checkout";
import "./Page.scss";
import '../Global/Global.scss'
function Page() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchedProduct />} />
        <Route
          path="adminpanel/*"
          element={<AdminPanel/>}
        />
        <Route path="/detail/:id" element={<Detail />} />
       
        <Route element={<Protected/>}>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/purchased" element={<Purchased/>}/>

        <Route/>
        </Route>
        
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default Page;
