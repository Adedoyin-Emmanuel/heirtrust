import React from 'react'
import AppBlueLogo from "./../assets/images/logo-blue.svg";
import AppButton from './app-button';


interface appHeaderProps
{
    className: string;
}
const AppHeader = ({className}: appHeaderProps):JSX.Element =>
{

    const handleButtonClick = ():void =>
    {
        //pass
    }
    return (
        <React.Fragment>
            <section className={`container-fluid d-flex align-items-center justify-content-between ${className}`}>
                <section className="app-logo-container my-2 d-flex align-items-center justify-content-center">
                <img src={AppBlueLogo} className="img-fluid" width={"80"} height={"80"} alt="HeirTrust Logo"/>
                </section>
                
                
                <section className="connect-wallet-button my-2 d-flex align-items-center justify-content-center">
                    <AppButton className="text-capitalize text-center brand-small-text-2 p-2 brand-button-outline-green header-join-waitlist-button" text="join waitlist" onClick={handleButtonClick}></AppButton>
                </section>
            </section>
        </React.Fragment>
    )
}

export default AppHeader;