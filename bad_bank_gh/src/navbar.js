import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [collapsed, setCollapsed] = React.useState(true);

  function toggleMenu() {
    setCollapsed(!collapsed);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        BadBank
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={!collapsed}
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${collapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alldata">
              AllData
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/balance">
              Balance
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/createaccount">
              Create Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/deposit">
              Deposit
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/withdraw">
              Withdraw
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
