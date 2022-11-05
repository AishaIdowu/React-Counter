import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div class="nav-container">
        <h3><Link to="/">Counter</Link></h3>
          <ul class="nav-links">
            <li>
              <Link to="/CustomHook">CustomHook</Link>
            </li>
            <li>
              <Link to="/Reducer">Reducer</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
