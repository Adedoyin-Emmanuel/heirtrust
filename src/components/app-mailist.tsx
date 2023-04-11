import React from "react";
import AppInput from "./app-input";
import AppButton from "./app-button";
import AppAwardFrame from "./app-award-frame";
import AppMailistWave from "./app-mailist-wave";
const AppMailist = (): JSX.Element => {
  const handleClick = (): void => {
    //pass
  };

  return (
    <React.Fragment>
    <AppMailistWave className="p-0"/>
      <section className="container-fluid d-flex flex-column flex-md-row align-items-center  justify-content-around">
        <section className="award-win-section d-flex flex-column align-items-center justify-content-center">
          <AppAwardFrame className="my-2" />
            <h6 className="text-capitalize fs-6 fw-bold my-2">
              honourable price mention in NEAR metabuild season III
            </h6>
        </section>
        <section className="maillist-section my-5 my-md-0">
          <h1 className="fw-bold fs-1 my-3 text-capitalize text-center">
            join our mailing list{" "}
          </h1>
          <p className="brand-small-text text-dark text-capitalize">
            get exclusive promotions & updates straight to your inbox. No spam!
          </p>
          <section className="email-input d-flex align-items-center flex-column">
            <AppInput
              type="text"
              className="my-3"
              placeHolder="Enter your name"
            />
            <AppInput
              type="email"
              className="my-3"
              placeHolder="Enter your email here"
            />

            <AppButton
              text="subscribe"
              className="text-capitalize app-waitlist-button text-center p-2 "
              onClick={handleClick}
            />
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};

export default AppMailist;
