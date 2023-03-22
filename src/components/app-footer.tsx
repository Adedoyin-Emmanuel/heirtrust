import React from 'react'
import AppWhiteLogo from "./../assets/images/logo-white.svg";
import AppEmailInput from './app-email-input';
const AppFooter = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="app-footer container-fluid brand-bg-primary-blue">
                <section className="app-footer-social-icons-container">
                    <section className="app-footer-logo-container">
                        <img src={AppWhiteLogo} className="img-fluid"/>
                    </section>
                    
                     <section className="app-footer-text-area">
                       {/* <p>To continue, Google will share your name, email address, language pictures with HeirTrust.</p> */}
                     </section>
                     <h4 className="fs-4 fw-bold text-light">let's get social</h4>                    
                     
                     <section className="app-footer-social-icons">
                     </section>
                </section>
                
                
                <section className="app-footer-explore">
                    <ul className="app-footer-explore-list">
                        <li className="app-footer-explore-items text-capitalize">term of service</li>
                        <li className="app-footer-explore-items text-capitalize">use case</li>
                        <li className="app-footer-explore-items text-capitalize">contact us</li>
                    </ul>
                </section>
                
                
                
                <section className="app-footer-mail-list">
                    <h4 className="fw-bold fs-4 text-capitalize">join our mailing list</h4>
                    <p>get exclusive promotions & updates straight to your inbox</p>
                    <AppEmailInput></AppEmailInput>
                </section>
            </section>
        </React.Fragment>
    );
}

export default AppFooter;