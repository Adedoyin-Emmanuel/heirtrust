import React from "react";
import HeroImage from "./../assets/images/dashboard-2.svg";

interface appHeroImageProps
{
    className: string;
}
const AppHeroImageContainer = ({className}: appHeroImageProps): JSX.Element => 
{
  return (
    <React.Fragment>
      <section className={`hero-image-container d-flex align-items-center justify-content-center ${className}`}>
        <img
          src={HeroImage}
          className="img-fluid m-auto hero-image"
          width="800"
          height="800"
          alt="HeirTrust Dashboard"
        />
      </section>
    </React.Fragment>
  );
};


export default AppHeroImageContainer;