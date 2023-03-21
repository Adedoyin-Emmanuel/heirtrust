import React from 'react'
import HeroImage from "./../assets/images/dashboard.svg";

const AppHero = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="app-hero brand-bg-primary-blue p-5 ">
                <section className="hero-heading py-5">
                    <h1 className="display-7 fw-bold text-light text-center p-5">
                        Secure your legacy for the future generations
                    </h1>
                    
                    <p className="hero-sub-heading brand-small-text-2 text-center text-light py-3 text-capitalize p-5">welcome to HeirTrust, the best platform for intergenerational digital wealth transfer</p>
                </section>
                
                {/* <section className="hero-image d-flex align-items-center justify-content-center">
                    <img src={HeroImage} className="img-fluid m-auto" alt="HeirTrust Dashboard"/>
                </section> */}
            </section>
        </React.Fragment>
    );
}

export default AppHero;