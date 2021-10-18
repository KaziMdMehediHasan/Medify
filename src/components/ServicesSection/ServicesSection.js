import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import "./ServicesSection.css";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <p className="text-center">FEATURED SERVICES</p>
      <h1 className="text-center mb-5">What we can offer you</h1>
      <div className="service-parent">
        <div className="service-container">
          {services.map((service) => (
            <SingleService service={service} key={service.id}></SingleService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
