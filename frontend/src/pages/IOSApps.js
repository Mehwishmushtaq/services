import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaMobileAlt, FaCode, FaApple, FaBug } from 'react-icons/fa'; 
import HomeContact from '../Components/HomeContact';
import ContactImg from '../assets/banner.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const IOSAppsServices = () => {
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
      title: 'Custom iOS App Development',
      description: 'Create tailored iOS applications that meet your business needs and provide an exceptional user experience.',
    },
    {
      title: 'UI/UX Design',
      description: 'Design engaging and intuitive interfaces for your iOS applications to enhance user satisfaction and usability.',
    },
    {
      title: 'App Store Optimization',
      description: 'Optimize your app for the App Store to increase visibility and attract more users.',
    },
    {
      title: 'iOS App Maintenance & Support',
      description: 'Ensure your app remains up-to-date and performs optimally with ongoing maintenance and support.',
    },
    {
      title: 'Performance Optimization',
      description: 'Enhance the performance and speed of your iOS app through optimization techniques and best practices.',
    },
    {
      title: 'Integration with Apple Ecosystem',
      description: 'Integrate your app seamlessly with Apple services and technologies, including iCloud and Apple Pay.',
    },
  ];

  const whyChooseUs = [
    'Expert developers with extensive iOS experience',
    'Cutting-edge UI/UX design tailored to your brand',
    'Comprehensive testing to ensure app stability and performance',
    'Ongoing support and updates to keep your app current',
    'Strategic App Store optimization for better visibility',
    'Seamless integration with the Apple ecosystem',
  ];

  const cardContent = [
    {
      icon: <FaMobileAlt size={80} color='#172554' />, 
      title: 'Custom iOS Development',
      description: 'Develop bespoke iOS applications tailored to your business requirements and goals.',
    },
    {
      icon: <FaCode size={80} color='#172554' />, 
      title: 'Code Optimization',
      description: 'Optimize code to ensure smooth performance and efficiency of your iOS applications.',
    },
    {
      icon: <FaApple size={80} color='#172554' />, 
      title: 'Apple Ecosystem Integration',
      description: 'Integrate your app with Apple services such as iCloud, Apple Pay, and more.',
    },
    {
      icon: <FaBug size={80} color='#172554' />, 
      title: 'Testing & Debugging',
      description: 'Conduct thorough testing and debugging to ensure your app is free of issues and performs optimally.',
    },
  ];

  return (
    <div className="container-fluid">
      <header style={headerStyle}>
        <h2 className="md:text-7xl font-bold font-[playfair-display]" data-aos="fade-down">IOS Apps</h2>
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

      {/* Key Features Section */}
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

export default IOSAppsServices;
