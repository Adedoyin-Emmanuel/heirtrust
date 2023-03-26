import React from "react";
import AppButton from "./app-button";

interface appEmailInput
{
  className:string;
  
}
const AppEmailInput = ({className}:appEmailInput): JSX.Element => 
{

  return (
    <React.Fragment>
        <input type="text" className={`form-control brand-small-text-2 p-3 w-100 ${className}`} placeholder="Enter your email here" />
    </React.Fragment>
  );
};

export default AppEmailInput;
