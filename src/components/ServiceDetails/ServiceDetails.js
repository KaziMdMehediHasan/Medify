import {
  faDollarSign,
  faHospitalUser,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  //getting the dynamic service id
  const { serviceId } = useParams();
  const [services, setServices] = useState();

  //fetching the data once more

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  //   the service we clicked on is being tracked
  const chosenService = services?.find((service) => service.id == serviceId);
  console.log(chosenService);

  //destructuring the values

  const { img, name, description, price, doctors, time, working } =
    chosenService || {};

  //icons
  const service = <FontAwesomeIcon icon={faHospitalUser} />;
  const cost = <FontAwesomeIcon icon={faDollarSign} />;
  const doctor = <FontAwesomeIcon icon={faUserMd} />;
  return (
    <div>
      <div className="detail-container container bg-gradient">
        <div className="detail-img">
          <img src={img} alt="details" />
        </div>
        <div className="detail-info">
          <h3>Department</h3>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      {/* additional info on the department */}
      <div className="more-info bg-info bg-gradient p-3">
        <h2 className="text-center">
          More info on Our {name} Department for Patients
        </h2>
      </div>
      <div className="additional-info container text-center p-4">
        <h3>{name}</h3>
        <p>
          <span className="fw-bold">
            {cost}
            {price}{" "}
          </span>
          Per Visit
        </p>
        <p>
          Working Days : <span className="fw-bold">{working}</span>
        </p>
        <p>
          Active Hours : <span className="fw-bold">{time}</span>
        </p>
        <h4>
          <span className="text-success">{doctor} </span>
          {doctors} doctors available
        </h4>
      </div>
    </div>
  );
};

export default ServiceDetails;
