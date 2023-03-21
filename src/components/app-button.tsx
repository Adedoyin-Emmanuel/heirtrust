import React from 'react'

interface appButtonProps
{
    text:string ;
    className:string;
    onClick: ()=> void;
    
}
const AppButton = ({text, className, onClick}: appButtonProps):JSX.Element => 
{
    return (
        <React.Fragment>
            <button className={`app-button ${className}`} onClick={onClick}>{text}</button>
        </React.Fragment>
    );
}



export default AppButton;

