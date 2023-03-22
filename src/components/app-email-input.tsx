import React from "react";
import AppButton from "./app-button";
const AppEmailInput = (): JSX.Element => 
{

  const handleClick = ():void =>
  {
    //pass
  }
  return (
    <React.Fragment>
      <section className="input-group  width-toggle-2">
        <input type="text" className="form-control brand-small-text-2" placeholder="Enter your email here" />
        <section className="input-group-append subscribe-button-container">
          <AppButton text="subscribe" className="text-capitalize brand-bg-primary-green text-light brand-small-text-2 fw-bold subscribe-button" onClick={handleClick}/>
        </section>
      </section>
    </React.Fragment>
  );
};

export default AppEmailInput;
