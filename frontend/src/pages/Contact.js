import React from 'react';
import HomeContact from '../Components/HomeContact';
import ContactForm from '../Components/ContactForm';
import ContactImg from '../assets/ContactUS.svg'

const Contact = () => {
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
    <div>
      <header style={headerStyle}>
        <h2 className='md:text-7xl font-bold font-[playfair-display]'>Contact Us</h2>
      </header>

      <ContactForm />
      <HomeContact />



    </div>
  );
};

export default Contact;






