import React from "react";
import "./HomeServiceSection.css";
import lab from "../../images/labtest.png";
import delivery from "../../images/delivery.png";

const HomeServiceSection = () => {
  return (
    <div className="my-5 py-5">
      <h2 className="text-center">HOME CALL SERVICES</h2>
      <p className="text-center">Get services delivered at your home</p>
      <div className="home-services-parent">
        <div className="container rounded-3 single-home-service bg-info shadow-lg bg-gradient my-5">
          <div className="service-img">
            <img src={delivery} />
          </div>
          <div>
            <h4>Medicine Home Delivery with 7% Discount</h4>
            <p>
              Call <b>16484</b> to order
            </p>
          </div>
        </div>
        <div className="container shadow-lg rounded-3 bg-gradient single-home-service bg-danger text-light">
          <div>
            <h4>
              Home Sample Collection and report Delivery with 25% Discount
            </h4>
            <p>
              Call <b>16484</b> to order
            </p>
          </div>
          <div className="service-img">
            <img src={lab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceSection;
