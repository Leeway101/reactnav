import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header className="bg-primary p-3 ">
        <nav className="container ">
          <ul className="nav d-flex justify-content-between">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Business
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
               Entertainment
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
               General
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolios">
               Health
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/sciense">
               Sciense
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/sports">
               Sports
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">
                Posts
              </NavLink>
            </li>

          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
