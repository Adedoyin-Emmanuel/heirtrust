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
        <input type={type} className={`form-control brand-small-text-2 p-3 width-toggle-8 ${className}`} placeholder={placeHolder} />
    </React.Fragment>
  );
};

export default AppInput;
