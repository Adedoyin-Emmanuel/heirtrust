import React from "react";
import HeroImage from "./../assets/images/dashboard.svg";
import HeroWave from "./app-hero-wave";
import AppWailist from "./app-waitlist";
interface appHeroProps {
  className: string;
}
const AppHero = ({ className }: appHeroProps): JSX.Element =>
{
  return (
    <React.Fragment>
      <section
        className={`app-hero brand-bg-primary-blue p-0 m-0 ${className}`}
      >
        <section className="hero-heading py-5">
          <h1 className="display-7 fw-bold text-light text-center p-2">
            Secure your legacy for the future generations
          </h1>

          <p className="hero-sub-heading brand-small-text-2 text-center text-light py-4 text-capitalize">
            welcome to HeirTrust, the best platform for intergenerational
            digital wealth transfer
          </p>
          <section className="m-2">
            <AppWailist />
          </section>
        </section>

       <br/>
        <HeroWave className="app-hero-wave" />
      </section>
    </React.Fragment>
  );
};

export default AppHero;
