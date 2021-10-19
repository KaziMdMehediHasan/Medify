import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const {
    user,
    handleEmail,
    handlePassword,
    error,
    handleRegistration,
    loginWithGoogle,
    toggle,
    isLogin,
  } = useAuth();

  console.log(user);

  const location = useLocation();
  console.log("came from", location.state?.from);
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    loginWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  // const handleEmailLogin = () => {
  //   handleRegistration().then((result) => {
  //     history.push(redirect_uri);
  //   });
  // };

  const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleRegistration}>
          {isLogin ? (
            <h1 className="text-center">Register</h1>
          ) : (
            <h1 className="text-center">Login</h1>
          )}

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            {/* email field */}
            <input
              onBlur={handleEmail}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            {/* password field */}
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              onChange={toggle}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I don't have an account (check to register now)
            </label>
          </div>
          <h3>{error}</h3>
          {isLogin ? (
            <button type="submit" className="btn btn-info bg-gradient">
              Register
            </button>
          ) : (
            <button type="submit" className="btn btn-info bg-gradient">
              Login
            </button>
          )}
        </form>
        <h1>OR</h1>
        {/* google div */}
        <div>
          <h1 className="text-center text-success">{googleIcon}</h1>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-danger bg-gradient"
          >
            Sign in with Google
          </button>
        </div>
      </div>
      {/* <h3 className="text-center">OR</h3> */}
      {/* <div className="google"></div> */}
    </div>
  );
};

export default Login;
