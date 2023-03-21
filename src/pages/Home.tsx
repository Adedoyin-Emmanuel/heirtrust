import React from 'react';
import AppHeader from '../components/app-header';
import AppHero from '../components/app-hero';

const Home = ():JSX.Element =>
{
    return (
        <React.Fragment>
            <section className="container-fluid p-0 " style={{"overflowX":"hidden"}}>
                <AppHeader className="brand-bg-white"/>
                
                <AppHero className=""/>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore suscipit sapiente corrupti non aperiam quasi sequi recusandae esse, provident magnam totam incidunt ex deleniti minima dolorem, quo similique vero.
            </section>
        </React.Fragment>
    );
}


export default Home;