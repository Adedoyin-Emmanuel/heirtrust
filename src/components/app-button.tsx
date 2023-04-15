import React from 'react'

interface appButtonProps
{
    text:string ;
    className:string;
    onClick?: ()=> void;
    
}
const AppButton = ({text, className, onClick}: appButtonProps):JSX.Element => 
{
    return (
        <React.Fragment>
            <button className={`brand-button ${className}`} onClick={onClick} data-aos="zoom-in-up">{text}</button>
        </React.Fragment>
    );
}



export default AppButton;

