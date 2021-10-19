import React from "react";
import Header from "../Header/Header";
import HomeServiceSection from "../HomeSericeSection/HomeServiceSection";
import NewsLetter from "../NewsLetter/NewsLetter";
import ServicesSection from "../ServicesSection/ServicesSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <div className="home-banner d-flex justify-content-evenly align-items-center">
        <div className="info-container p-5">
          <h1 className="fw-bold">
            Leading you to a <span className="text-gradient">Healthy</span> life
          </h1>
          <p className="text-white">
            In today’s modern world, many of our systems and customs seem to be
            organized in a way that separates the different facets of health-
            for example, a nutritionist might recommend ways to eat healthfully,
            and a therapist might recommend ways to cope with stress, but often,
            there is little to no crossover guidance, or framework for fitting
            the pieces together as a whole.
          </p>
        </div>
        <div></div>
      </div>
      {/* services section */}
      <ServicesSection></ServicesSection>
      <HomeServiceSection></HomeServiceSection>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
