import React from "react";
import "./SingleService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faHospitalUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const { name, img, id, price } = props.service;

  //icons
  const service = <FontAwesomeIcon icon={faHospitalUser} />;
  const cost = <FontAwesomeIcon icon={faDollarSign} />;
  return (
    <div className="service-card shadow-lg">
      <div className="service-img">
        <img src={img} alt="service" />
      </div>
      <div className="service-info p-3">
        <h3>
          <span className="text-danger">{service} </span>
          {name}
        </h3>
        <p className="fw-bold">
          <span className="text-success">{cost} </span>
          {price}
        </p>
        <Link to={`/service/${id}`}>
          <button className="btn btn-info fw-bold">View</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
