import React from "react";
interface appInputProps
{
  className:string;
  placeHolder:string;
  type:string;
  
}
const AppInput = ({className, placeHolder, type}:appInputProps): JSX.Element => 
{

  return (
    <React.Fragment>
        <input type={type} className={`form-control brand-small-text-2 p-3  ${className}`} placeholder={placeHolder} id="waitlist_input"/>
    </React.Fragment>
  );
};

export default AppInput;
