import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

function Navbar2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="navbar2">
      <div className="navbar-logo">
        <img
          src="https://img.freepik.com/premium-vector/teamwork-logo-template-design_20029-459.jpg"
          alt="RBAC Logo"
        />
        <h2 className="nav2-h">RBAC</h2>
      </div>
      <nav className="navbar-content">
        <ul className={`nav2-ul ${isDropdownOpen ? "show" : ""}`}>
          <li>
            <Link className="link" to="/" onClick={closeDropdown}>
              Board
            </Link>
          </li>
          <li>
            <Link className="link" to="/Dashboard" onClick={closeDropdown}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/Timeline" onClick={closeDropdown}>
              Timeline
            </Link>
          </li>
          <li>
            <Link className="link" to="/Overview" onClick={closeDropdown}>
              Overview
            </Link>
          </li>
          <li>
            <Link className="link" to="/Login/Signup" onClick={closeDropdown}>
              Login/Signup
            </Link>
          </li>
        </ul>
        <div className="navbar-icons">
          <img
            className="nav2-imgS"
            src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
            alt="User Profile 1"
          />
          <img
            className="nav2-imgS"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s"
            alt="User Profile 2"
          />
          <img
            className="nav2-imgS"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s"
            alt="User Profile 3"
          />
        </div>
        <div className="hamburger" onClick={toggleDropdown}>
          &#x22EE;
        </div>
      </nav>
    </header>
  );
}

export default Navbar2;
