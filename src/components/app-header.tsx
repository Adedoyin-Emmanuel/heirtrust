import React from 'react'
import AppBlueLogo from "./../assets/images/logo-blue.svg";
import AppButton from './app-button';

const AppHeader = ():JSX.Element =>
{

    const handleButtonClick = ():void =>
    {
        //pass
    }
    return (
        <React.Fragment>
            <section className="container-fluid d-flex">
                <section className="app-logo-container">
                    <img src={AppBlueLogo} className="img-fluid"/>
                </section>
                
                
                <section className="connect-wallet-button">
                    <AppButton className="text-capitalize text-center" text="connect wallet" onClick={handleButtonClick}></AppButton>
                </section>
            </section>
        </React.Fragment>
    )
}

export default AppHeader;