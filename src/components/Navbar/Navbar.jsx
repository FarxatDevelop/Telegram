import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>All</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/group"}>Group</NavLink>
        </li>
        <li>
          <NavLink to={"/channel"}>Channel</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
