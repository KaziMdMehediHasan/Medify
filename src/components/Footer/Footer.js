import React from "react";
import "./Footer.css";
import logo from "../../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  //icons
  const facebook = <FontAwesomeIcon icon={faFacebook} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const youtube = <FontAwesomeIcon icon={faYoutube} />;

  return (
    <div className="footer-container p-5 mt-5">
      {/* logo and slogan */}
      <div className="container d-flex justify-content-evenly">
        <div className="slogan">
          <img src={logo} alt="logo" />
          <p>
            <b>Medify</b> leads you to a healthy life
          </p>
        </div>
        <div>
          <h5>Most Popular</h5>
          <p>e-Clinic</p>
          <p>e-checkup</p>
          <p>Diabetes</p>
          <p>Diet Consultations</p>
          <p>Emergency</p>
        </div>
        <div>
          <h5>Information</h5>
          <p>About Us</p>
          <p>Contact</p>
          <p>Carepack Teams</p>
        </div>
        <div>
          <h5>Social Media Links</h5>
          <div className="d-flex justify-content-evenly">
            <p>{facebook}</p>
            <p>{instagram}</p>
            <p>{twitter}</p>
            <p>{youtube}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
