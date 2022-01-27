import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <div className="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <NavLink
        to={"/"}
        className={
          "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        }
      >
          </NavLink>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to={"/"} className={"nav-link"} aria-current="page">
              Home
            </NavLink>
          </li>
          <li className={"nav-item"}>
            <NavLink to={"/about"} className={"nav-link"}>
              Tutorial
            </NavLink>
          </li>
          <li className={"nav-item"}>
            <NavLink to={"/search"} className={"nav-link"}>
              Search
            </NavLink>
          </li>
          <li className={"nav-item"}>
            <NavLink to={"/contact"} className={"nav-link"}>
              AI model
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contact"} className={"nav-link"} aria-current="page">
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contact"} className={"nav-link"} aria-current="page">
              Contact us
            </NavLink>
          </li>
        </ul>
      </header>
    
    </div>
  );
}
