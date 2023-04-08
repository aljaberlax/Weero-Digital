import React from 'react';
import Banner from '../Banner/Banner';
import About from './About';
import EarlyAccess from './EarlyAccess';
import Partners from './Partners';
import Gallery from './Gallery';
import Testimonial from './Testimonial';
import Team from './Team';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <EarlyAccess></EarlyAccess>
            <Partners></Partners>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
            <Team></Team>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;