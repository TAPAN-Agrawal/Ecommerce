import React from "react";
import "./Global/Global.scss";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import Notfound from "./Components/Notfound/Notfound";
import Detail from "./Components/Detail/Detail";
import UserTable from "./Components/UserTable/UserTable";
import AddAdmin from "./Components/AddAdmin/AddAdmin";
import ProductTable from "./Components/ProductTable/ProductTable";
import Cart from "./Components/Cart/Cart";
import Purchased from "./Components/Purchased/Purchased";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protected from "./Components/Protected/Protected";
import RoleProtected from "./Components/RoleProtected/RoleProtected";
import SearchedProduct from "./Components/SearchedProduct/SearchedProduct";
import Checkout from "./Components/Checkout/Checkout";
function App() {
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
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/search" element={<SearchedProduct />} />
        <Route
          path="adminpanel/*"
          element={<RoleProtected Component={AdminPanel} />}
        />
        <Route path="detail" element={<Detail />} />
        <Route path="/cart" element={<Protected Component={Cart} />} />
        <Route path="/checkout" element={<Protected Component={Checkout} />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
