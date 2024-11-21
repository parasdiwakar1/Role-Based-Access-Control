import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

function Navbar2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="navbar2">
        <div className="navbar-logo">
          <img
            src="https://img.freepik.com/premium-vector/teamwork-logo-template-design_20029-459.jpg"
            alt="Logo"
          />
          <h2 className="nav2-h">RBAC</h2>
        </div>
        <div className="navbar-content">
          <div className="nav2-ul">
            <ul className="nav2-ul">
              
              <li className='title-link'>
                <Link className='link' to="/">Board</Link>
              </li>
              
              <li className='title-link'>
                <Link className='link' to="/Dashboard">Dashboard</Link>
              </li>
              <li className='title-link'>
                <Link className='link' to="/Timeline">Timeline</Link>
              </li>
              <li className='title-link'>
                <Link to="/Overview" className='link' >Overview</Link></li>
             
            </ul>
          </div>
          <div className="navbar-searchx">
            <img
              className="nav2-imgS"
              src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
              alt=""
            />
            <img
              className="nav2-imgS"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s"
              alt=""
            />
            <img
              className="nav2-imgS"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s"
              alt=""
            />
            
          </div>
          <Link to='/Login/Signup'>
          
          <h3 className='loginS'> <i class="fa-solid fa-user"></i> Login</h3>
          </Link>

          <div className="hamburger" onClick={toggleDropdown}>
            &#x22EE;
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content show">
              <ul>
                <li>
                  <Link className='link' to="/Overview">Overview</Link>
                </li>
                <li className='title-link'>
                  <Link className='link' to="/list">List</Link>
                </li>
                <li className='title-link'>
                  <Link className='link' to="/">Board</Link>
                </li>
                <li className='title-link'>
                  <Link className='link' to="/Timeline">Timeline</Link>
                </li>
                <li className='title-link'>
                  <Link className='link' to="/Calendar">Calendar</Link>
                </li>
                <li className='title-link'>
                  <Link className='link' to="/Dashboard">Dashboard</Link>
                </li>
                <li className='title-link'>
                  <Link className='link' to="/Messages">Messages</Link>
                </li>
                <li className='title-link'>
                  <Link className='link' to="/Login/Signup">Login/Signup</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
