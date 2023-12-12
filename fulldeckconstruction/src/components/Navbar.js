import React from "react";
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navigation">
          <a href="/" className="brand-name">
            Full Deck Construction
          </a>
          <div
            className="navigation-menu">
            <ul>
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/">Register</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }