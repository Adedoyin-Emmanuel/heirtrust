import React from 'react'
import AppWhiteLogo from "./../assets/images/logo-white.png";
import AppEmailInput from './app-email-input';
const AppFooter = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="app-footer container-fluid">
                <section className="app-footer-social-icons-container">
                    <section className="app-footer-logo-container">
                        <img src={AppWhiteLogo} className="img-fluid"/>
                    </section>
                    
                     <section className="app-footer-text-area">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores odit eaque dicta perferendis provider</p>
                     </section>
                     
                     <section className="app-footer-social-icons">
                     </section>
                </section>
                
                
                <section className="app-footer-explore">
                    <ul className="app-footer-explore-list">
                        <li className="app-footer-explore-items">term of service</li>
                        <li className="app-footer-explore-items">term of service</li>
                        <li className="app-footer-explore-items">term of service</li>
                    </ul>
                </section>
                
                
                
                <section className="app-footer-mail-list">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    
                    <AppEmailInput></AppEmailInput>
                </section>
            </section>
        </React.Fragment>
    );
}