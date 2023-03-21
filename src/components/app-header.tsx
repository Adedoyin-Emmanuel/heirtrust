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
            <section className="container-fluid d-flex align-items-center justify-content-between brand-bg-primary-blue">
                <section className="app-logo-container my-2 d-flex align-items-center justify-content-center">
                <img src={AppBlueLogo} className="img-fluid" width={"80"} height={"80"}/>
                </section>
                
                
                <section className="connect-wallet-button my-2 d-flex align-items-center justify-content-center">
                    <AppButton className="text-capitalize text-center brand-small-text-2 p-2 brand-button-outline-green" text="connect wallet" onClick={handleButtonClick}></AppButton>
                </section>
            </section>
        </React.Fragment>
    )
}

export default AppHeader;