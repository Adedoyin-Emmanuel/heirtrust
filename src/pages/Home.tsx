import React from 'react';
import AppHeader from '../components/app-header';
import AppHero from '../components/app-hero';

const Home = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="container-fluid p-0">
                <AppHeader />
                <AppHero/>
            </section>
        </React.Fragment>
    );
}


export default Home;