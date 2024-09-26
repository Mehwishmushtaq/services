import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaLaptopCode, FaMobileAlt, FaCloud, FaLock } from 'react-icons/fa'; 
import HomeContact from '../Components/HomeContact';
import ContactImg from '../assets/banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const WebAppDevelopment = () => {
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
      title: 'Custom Web App Development',
      description: 'We build high-performance, secure, and scalable web applications tailored to meet your specific business needs.',
    },
    {
      title: 'Progressive Web Apps (PWAs)',
      description: 'Deliver a seamless user experience across all devices with Progressive Web Apps that combine the best of web and mobile apps.',
    },
    {
      title: 'E-commerce Web Development',
      description: 'We create secure, user-friendly, and scalable e-commerce platforms to help you grow your online business.',
    },
    {
      title: 'Single Page Applications (SPA)',
      description: 'Our team specializes in developing responsive and fast SPAs using modern technologies like React and Angular.',
    },
    {
      title: 'Web App Maintenance & Support',
      description: 'We offer continuous support and maintenance to keep your web application up-to-date and running smoothly.',
    },
    {
      title: 'API Integration & Development',
      description: 'We integrate third-party APIs and develop custom APIs to enhance the functionality and connectivity of your web applications.',
    },
  ];

  const whyChooseUs = [
    'Proven expertise in modern web technologies like React, Angular, and Vue.js',
    'Tailored solutions designed to scale as your business grows',
    'Focus on security, performance, and user experience',
    'Agile methodology ensuring timely delivery and flexibility',
    'Dedicated support and maintenance services',
    'Cost-effective and transparent pricing',
  ];

  // New cards section content
  const cardContent = [
    {
      icon: <FaLaptopCode size={80} color='#172554'/>,
      title: 'Custom Development',
      description: 'We offer custom web app solutions built with modern technologies to meet your business needs.',
    },
    {
      icon: <FaMobileAlt size={80} color='#172554' />,
      title: 'Mobile-First Design',
      description: 'Our designs are fully responsive and optimized for mobile users for seamless interaction.',
    },
    {
      icon: <FaCloud size={80} color='#172554'/>,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate cloud services with your web apps for scalability and performance.',
    },
    {
      icon: <FaLock size={80} color='#172554'/>,
      title: 'Security First',
      description: 'We prioritize security to ensure your web applications are safe from threats and vulnerabilities.',
    },
  ];

  return (
    <div className="container-fluid">
      <header style={headerStyle}>
        <h2 className="md:text-7xl font-bold font-[playfair-display]">Web App Development</h2>
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
                  <div className="icon mb-3" data-aos = "zoom-in" data-aos-duration="2000">
                    {card.icon}
                  </div>
                  <h4 className="card-title mb-3 font-[display-fair] font-bold">{card.title}</h4>
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

export default WebAppDevelopment;
