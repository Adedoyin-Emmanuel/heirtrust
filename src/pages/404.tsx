import React from 'react';
import AppHeader from '../components/app-header';

const NotFound = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="container-fluid">
                <AppHeader className="brand-bg-white"/>
                
                you are lost
            </section>
        </React.Fragment>
    );
}


export default NotFound;