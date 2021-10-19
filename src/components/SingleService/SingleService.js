import React from "react";
import "./SingleService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faDollarSign,
  faHospitalUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const { name, img, id, price, working } = props.service;

  //icons
  const service = <FontAwesomeIcon icon={faHospitalUser} />;
  const cost = <FontAwesomeIcon icon={faDollarSign} />;
  const calender = <FontAwesomeIcon icon={faCalendarWeek} />;
  return (
    <div className="service-card shadow">
      <div className="service-img">
        <img src={img} alt="service" />
      </div>
      <div className="service-info p-3">
        <h4>
          <span className="text-danger">{service} </span>
          {name}
        </h4>
        <p className="fw-bold">
          <span className="text-success">{cost} </span>
          {price}
        </p>
        <p>
          <b>{calender} </b>
          {working}
        </p>
        <Link to={`/service/${id}`}>
          <button className="btn btn-info fw-bold">View</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
