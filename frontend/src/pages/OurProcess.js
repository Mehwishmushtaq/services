import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContact from '../Components/HomeContact';
import ConsultantCard from '../Components/ConsultantCard';
import ContactImg from '../assets/ContactUS.svg';

const Technologies = () => {
  const headerStyle = {
    backgroundImage: `url(${ContactImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    paddingTop: '10rem',
    paddingBottom: '10rem',
    height: '100%',
    width: '100%'
  };

  return (
    
    <div className="container">
      <header style={headerStyle}>
        <h2 className='md:text-7xl font-bold font-[playfair-display]'>Our Process</h2>
      </header>

     <ConsultantCard />
     <HomeContact />
     
    </div>
  );
};

export default Technologies;
