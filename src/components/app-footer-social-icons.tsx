import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
const SocialIcons = (): JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="social-icons-container d-flex align-items-center justify-content-start">
                <section className="social-icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faLinkedin} style={{"color":"#fff"}}/>
                </section>
                
                <section className="social-icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faInstagram} style={{"color":"#fff"}}/>
                </section>
                
                <section className="social-icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faFacebook} style={{"color":"#fff"}}/>
                </section>
            </section>
        </React.Fragment>
    );
}


export default SocialIcons