import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaMobileAlt, FaCogs, FaBatteryFull, FaSync } from 'react-icons/fa'; 
import HomeContact from '../Components/HomeContact';
import ContactImg from '../assets/banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const MobileApps = () => {
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
    width: '100%',
  };

  const services = [
    {
      title: 'Custom Mobile App Development',
      description: 'We create bespoke mobile apps tailored to your business needs, ensuring high performance and great user experience.',
    },
    {
      title: 'Cross-Platform App Solutions',
      description: 'Our cross-platform solutions ensure your app runs smoothly on both Android and iOS devices.',
    },
    {
      title: 'UI/UX Design for Mobile',
      description: 'We provide user-friendly designs with smooth navigation to deliver an optimal user experience for your app.',
    },
    {
      title: 'App Maintenance & Support',
      description: 'We offer ongoing support and maintenance services to ensure your app stays updated and runs without issues.',
    },
    {
      title: 'Enterprise Mobile Apps',
      description: 'We develop secure, scalable, and high-performing mobile apps for enterprises, boosting productivity and efficiency.',
    },
    {
      title: 'Mobile App Integration',
      description: 'Our integration services ensure seamless connection between your app and third-party platforms or APIs.',
    },
  ];

  const whyChooseUs = [
    'Expert team with vast experience in mobile app development',
    'High-quality, scalable, and secure mobile apps',
    'User-centered designs for a seamless experience',
    'Timely delivery and agile methodology',
    'Ongoing support and maintenance',
    'Competitive pricing tailored to your budget',
  ];

  // New cards section content
  const cardContent = [
    {
      icon: <FaMobileAlt size={80} color='#172554' />,
      title: 'Custom Mobile Apps',
      description: 'We develop tailored mobile applications to fit your unique business requirements.',
    },
    {
      icon: <FaCogs size={80} color='#172554' />,
      title: 'Cross-Platform Development',
      description: 'Our solutions ensure your app performs optimally on both Android and iOS devices.',
    },
    {
      icon: <FaBatteryFull size={80} color='#172554' />,
      title: 'Performance Optimization',
      description: 'We focus on enhancing app performance for a smooth and efficient user experience.',
    },
    {
      icon: <FaSync size={80} color='#172554' />,
      title: 'Ongoing Support',
      description: 'Our dedicated support ensures your app remains up-to-date and responsive to changes.',
    },
  ];

  return (
    <div className="container-fluid">
      <header style={headerStyle}>
        <h2 className="md:text-7xl font-bold font-[playfair-display]">Mobile Apps</h2>
      </header>

      <div className="container py-5">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 mb-2">
              <h3 className="h5 font-weight-bold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Section: Cards with Animated Icons */}
      <div className="container py-5">
        <h3 className="text-center md:text-5xl font-bold font-[playfair-display] mb-4">Our Key Features</h3>
        <div className="row">
          {cardContent.map((card, index) => (
            <div key={index} className="col-md-3 text-center mb-4">
              <div className="card p-4 h-100 shadow-lg">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="icon mb-3" data-aos="zoom-in" data-aos-duration="2000">
                    {card.icon}
                  </div>
                  <h4 className="card-title mb-3 font-[playfair-display] font-bold">{card.title}</h4>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container py-5">
        <h3 className="text-left md:text-5xl font-bold font-[playfair-display] mb-4">Why Choose Us</h3>
        <ul className="list-unstyled">
          {whyChooseUs.map((reason, index) => (
            <li key={index} className="d-flex align-items-center mb-3">
              <FaCheck className="text-success mr-2" /> 
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <HomeContact />
    </div>
  );
};

export default MobileApps;
