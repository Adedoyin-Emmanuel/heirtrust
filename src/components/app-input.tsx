import React from "react";
interface appInputProps
{
  className:string;
  placeHolder:string;
  type:string;
  name?:string;
  autoComplete?:string;
}
const AppInput = ({className, placeHolder, type, name, autoComplete}:appInputProps): JSX.Element => 
{

  return (
    <React.Fragment>
        <input type={type} className={`form-control brand-small-text-2 p-3  ${className}`} placeholder={placeHolder} name={name} id="waitlist_input " autoComplete={autoComplete} required/>
    </React.Fragment>
  );
};

export default AppInput;
