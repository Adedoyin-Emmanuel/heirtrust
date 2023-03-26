import React from 'react'
import AppEmailInput from './app-email-input';
import AppButton from './app-button';
const AppWaitlist = ():JSX.Element =>
{

    const handleClick = ():void =>
    {
        //pass
    }
    
    return (
        <React.Fragment>
            <section className="container-fluid d-md-flex align-items-center flex-column">
                <h1 className="fw-bold fs-1 my-3 text-capitalize text-center">join our waitlist </h1>
                <p className="brand-small-text text-dark text-capitalize">get exclusive promotions & updates straight to your inbox. No spam!</p>
                <section className="email-input d-flex align-items-center width-toggle-3 flex-column">
                  <AppEmailInput className="my-3"/>
                    <AppButton text="subscribe" className="text-capitalize app-waitlist-button text-center p-2 width-toggle-8" onClick={handleClick}/>
                </section>
            </section>
        </React.Fragment>
    );
}

export default AppWaitlist;