import React from 'react';
import AppHeader from '../components/app-header';
import AppHero from '../components/app-hero';
import HeroWave from '../components/app-hero-wave';
import AppHeroImageContainer from '../components/app-hero-image';

const Home = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="container-fluid p-0" style={{"overflowX":"hidden"}}>
                <AppHeader className="brand-bg-white"/>
                
                <AppHero className=""/>
                <section className="d-sm-block d-md-none my-4">
                      <AppHeroImageContainer className="hero-image-container-lg" />
                </section> 
                <section className="d-md-block my-3 d-lg-none d-none">
                      <AppHeroImageContainer className="hero-image-container-lg" />
                </section>  
                <section className="d-lg-block d-xl-none d-none">
                      <AppHeroImageContainer className="hero-image-container-lg" />
                </section>          
                <section className="d-xl-block d-xxl-none d-none">
                      <AppHeroImageContainer className="hero-image-container-xl" />
                </section>  
                <section className="d-xxl-block d-none">
                      <AppHeroImageContainer className="hero-image-container-xxl" />
                </section>  
                <section className="text-start px-2">
                    Lorem ipsum dolor sit  magnam totam incidunt ex deleniti minima dolorem, quo similique vero.  
                </section>
                
            </section>
        </React.Fragment>
    );
}


export default Home;