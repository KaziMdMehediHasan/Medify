import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user?.displayName, user?.email);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient">
        <div className="container">
          <div className="brand">
            <Link className="navbar-brand" to="/home">
              <img src={logo} alt="brand" />
              <h5 className="d-inline">Medify</h5>
            </Link>
          </div>

          <div className="other-links">
            {/* collapsing hamburger Menu */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* hamburger menu end */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                {user?.displayName || user?.email ? (
                  <p className="nav-link fw-bold">
                    {user.displayName || user.email}
                  </p>
                ) : (
                  <p className="nav-link fw-bold">not logged in</p>
                )}
                {user?.displayName || user?.email ? (
                  <button onClick={logOut} className="btn btn-danger">
                    Logout
                  </button>
                ) : (
                  <Link
                    className="nav-link"
                    to="/login"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
