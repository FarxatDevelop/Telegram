import React from "react";
import { Routes, Route } from "react-router-dom";
import RightInfo from "./RightInfo";
import "./right.css";

function Right() {
  return (
    <div className="right">
      <Routes>
        <Route path={"/contact/:id"} element={<RightInfo />} />
        <Route
          path={"/"}
          element={<h4>Select a chat to start messaging </h4>}
        />
        <Route
          path={"/group"}
          element={<h4>Select a chat to start messaging </h4>}
        />
        <Route
          path={"/contact"}
          element={<h4>Select a chat to start messaging </h4>}
        />
        <Route
          path={"/channel"}
          element={<h4>Select a chat to start messaging </h4>}
        />
      </Routes>
    </div>
  );
}

export default Right;
