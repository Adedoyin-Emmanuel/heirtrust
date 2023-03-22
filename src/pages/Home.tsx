import React from 'react';
import AppHeader from '../components/app-header';
import AppHero from '../components/app-hero';
import AppHeroImageContainer from '../components/app-hero-image';
import AppAbout from '../components/app-about-section';
import AppFooter from '../components/app-footer';

const Home = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="container-fluid p-0" style={{"overflowX":"hidden"}}>
                <AppHeader className="brand-bg-white"/>
                
                <AppHero className=""/>
                {/* <section className="d-sm-block my-4">
                      <AppHeroImageContainer className="hero-image-container-lg" />
                </section>  */}
                <section className="d-sm-block my-4 d-lg-none">
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
                
                <AppAbout/>
                <AppFooter/>
            </section>
        </React.Fragment>
    );
}


export default Home;