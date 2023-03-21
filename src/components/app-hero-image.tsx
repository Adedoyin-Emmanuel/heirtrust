import React from "react";
import HeroImage from "./../assets/images/dashboard.svg";

const HeroImageContainer = (): JSX.Element => 
{
  return (
    <React.Fragment>
      <section className="hero-image-container d-flex align-items-center justify-content-center">
        <img
          src={HeroImage}
          className="img-fluid m-auto hero-image"
          alt="HeirTrust Dashboard"
        />
      </section>
    </React.Fragment>
  );
};


export default HeroImageContainer;