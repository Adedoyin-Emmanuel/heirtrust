import React from "react";
import AppWhiteLogo from "./../assets/images/logo-white.svg";
import AppEmailInput from "./app-email-input";
import SocialIcons from "./app-footer-social-icons";
const AppFooter = (): JSX.Element => {
  return (
    <React.Fragment>
      <section
        className="app-footer container-fluid brand-bg-primary-blue  row p-0 m-0"
        style={{ overflowX: "hidden" }}
      >
        <section className="app-footer-social-icons-container col-sm-6 col-lg-3 col-md-4 p-3 ">
          <section className="app-footer-logo-container">
            <img
              src={AppWhiteLogo}
              className="img-fluid"
              width="70"
              height="70"
            />
          </section>

          <section className="app-footer-text-area ">
            <p className="brand-small-text-3 text-light text-capitalize my-3 p-1">
              To continue, Google will share your name, email address, language
              pictures with HeirTrust.
            </p>
          </section>
        </section>

        <section className="app-footer-explore col-sm-6 col-lg-5 col-md-4 ">
          <h5 className="text-capitalize text-light fs-5  my-3 fw-bold">
            explore
          </h5>
          <ul className="app-footer-explore-list list-unstyled text-light">
            <li className="app-footer-explore-items text-capitalize my-2 text-light brand-small-text-2">
              term of service
            </li>
            <li className="app-footer-explore-items text-capitalize my-2 text-light brand-small-text-2">
              use case
            </li>
            <li className="app-footer-explore-items text-capitalize my-2 text-light brand-small-text-2">
              contact us
            </li>
          </ul>
        </section>

        {/* <h5 className="fw-bold fs-5 text-capitalize text-light">join our mailing list</h5>
                    <p className="brand-small-text-3 text-light">Get exclusive promotions & updates straight to your inbox</p>
                    <AppEmailInput></AppEmailInput> */}
        <section className="app-footer-mail-list col-sm-6 col-lg-3 col-md-4 my-3  ">
          <p className=" text-capitalize  text-light my-3">let's get social</p>
          <section className="app-footer-social-icons my-3">
            <SocialIcons />
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};

export default AppFooter;
