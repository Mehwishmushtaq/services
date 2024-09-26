import React from 'react'
import AboutImg from '../assets/ABOUT_US.svg';
import AboutCard from '../Components/AboutCard';
import AboutHome from '../Components/About';
import HomeContact from '../Components/HomeContact';
import CallToAction from '../Components/CalltoAction';
const AboutUsMenu = () => {

  const headerStyle = {
    backgroundImage: `url(${AboutImg})`,
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
        <h2 className='md:text-7xl font-bold font-[playfair-display]'>About Us</h2>
      </header>

      <div className='container'>
        <div className="container-fluid row mt-5">
          {/* ReactJS Section */}
          <div className="col-md-6">
            <p className="text-justify font-bold mt-5 px-5" style={{ fontSize: '1.2rem' }}>
              Perseverance, courage, and dedication are the essences of an entrepreneurial mindset to achieve your SMART goals (Name, CEO)
              <br /><br />
              It serves as a foundation for developing single-page programs and can adapt to various broad implementations.
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <img src={'https://via.placeholder.com/600x250'} alt="ReactJS" className="img-fluid" />
          </div>
        </div>

        <AboutCard />
      </div>

      <div>
        <AboutHome />
        <HomeContact />
        <CallToAction />
      </div>
    </div>
  )
}

export default AboutUsMenu;
