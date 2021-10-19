import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import notFound from "../../images/notfound2.jpg";

const NotFound = () => {
  return (
    <div className="not-found-parent">
      <div className="not-found">
        <img src={notFound} />
      </div>
      <Link to="/">
        <button className="btn btn-info">Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
