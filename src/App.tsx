import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import "./App.css"

function App() {
  return (
    <>
      <Navbar />

<Routes>
  <Route path="home" element={<Home/>}/>
  <Route path="register" element={<Register/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path="adminpanel/*" element={<AdminPanel />} />

</Routes>
    </>
  );
}

export default App;
