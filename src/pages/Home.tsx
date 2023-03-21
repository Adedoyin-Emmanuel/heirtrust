import React from 'react';
import AppHeader from '../components/app-header';

const Home = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="container-fluid">
                <AppHeader />
            </section>
        </React.Fragment>
    );
}


export default Home;