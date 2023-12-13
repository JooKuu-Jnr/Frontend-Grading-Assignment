import { Routes, Route } from "react-router-dom";
import React from 'react'
import StDashBoard from "../pages/StDashBoard";
import Home from "../pages/Home";
import Courses from "../pages/Courses";

import Contact from "../pages/Contact";

const Approute = () => {
  return (
    <Routes>

        <Route path="/" element={<StDashBoard/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<Contact/>}/>
       
    </Routes>
  )
}

export default Approute
