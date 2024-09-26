import React from 'react'
import HeroSection from '../Components/HeroSection';
import Cards from '../Components/Card';
import AboutUs from '../Components/About';
import HomePortfolio from '../Components/HomePortfolio';
import Testimonials from '../Components/testimonials';
import Contact from '../Components/HomeContact';


const Home = () => {
    return (
        <>
            <HeroSection />
            <Cards />
            <AboutUs />
            <HomePortfolio />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home
