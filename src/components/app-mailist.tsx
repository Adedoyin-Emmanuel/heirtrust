import React from "react";
import AppInput from "./app-input";
import AppButton from "./app-button";
const AppMailist = (): JSX.Element => {
  const handleClick = (): void => {
    //pass
  };

  return (
    <React.Fragment>
      <section className="container-fluid d-md-flex align-items-center flex-column">
        <h1 className="fw-bold fs-1 my-3 text-capitalize text-center">
          join our mailing list{" "}
        </h1>
        <p className="brand-small-text text-dark text-capitalize">
          get exclusive promotions & updates straight to your inbox. No spam!
        </p>
        <section className="email-input d-flex align-items-center width-toggle-3 flex-column">
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
            className="text-capitalize app-waitlist-button text-center p-2 width-toggle-8"
            onClick={handleClick}
          />
        </section>
      </section>
    </React.Fragment>
  );
};

export default AppMailist;
