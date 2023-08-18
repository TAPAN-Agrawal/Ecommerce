import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AdminPanel from "../Components/AdminPanel/AdminPanel";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Notfound from "../Components/Notfound/Notfound";
import Detail from "../Components/Detail/Detail";
import Cart from "../Components/Cart/Cart";
import Purchased from "../Components/Purchased/Purchased";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protected from "../Components/Protected/Protected";
import RoleProtected from "../Components/RoleProtected/RoleProtected";
import SearchedProduct from "../Components/SearchedProduct/SearchedProduct";
import Checkout from "../Components/Checkout/Checkout";
import './Page.scss'
function Page() {
  return (
    <>
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
          element={<RoleProtected Component={AdminPanel} />}
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Protected Component={Cart} />} />
        <Route path="/checkout" element={<Protected Component={Checkout} />} />
        <Route path="/purchased" element={<Protected Component={Purchased} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default Page;
