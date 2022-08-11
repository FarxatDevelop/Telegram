import React from "react";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Contacts from "../Contact/Contact";
import "./left.css";

function Left() {
  return (
    <div className="left">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Contacts />} />
        <Route path={"/contact"} element={<Contacts />} />
        <Route path={"/contact/:id"} element={<Contacts />} />
        <Route path={"/group"} element={<Contacts />} />
        <Route path={"/channel"} element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default Left;
