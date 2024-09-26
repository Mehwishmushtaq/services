import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaAndroid, FaCode, FaMobileAlt, FaGooglePlay } from 'react-icons/fa'; // Icons for Android Apps
import HomeContact from '../Components/HomeContact';
import ContactImg from '../assets/banner.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const AndroidAppServices = () => {
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
      title: 'Custom Android App Development',
      description: 'Develop tailored Android applications to meet your business requirements and provide a superior user experience.',
    },
    {
      title: 'UI/UX Design',
      description: 'Create engaging and user-friendly interfaces for your Android apps to enhance usability and user satisfaction.',
    },
    {
      title: 'Google Play Optimization',
      description: 'Optimize your app for the Google Play Store to improve visibility and attract more users.',
    },
    {
      title: 'Android App Maintenance & Support',
      description: 'Provide ongoing maintenance and support to keep your Android app updated and functioning smoothly.',
    },
    {
      title: 'Performance Enhancement',
      description: 'Optimize your app’s performance to ensure fast load times and efficient operation on Android devices.',
    },
    {
      title: 'Integration with Google Services',
      description: 'Integrate your app with Google services like Firebase, Google Analytics, and Google Maps to extend its functionality.',
    },
  ];

  const whyChooseUs = [
    'Experienced developers specializing in Android app development',
    'Customizable UI/UX designs tailored to your brand',
    'Comprehensive testing for app stability and performance',
    'Ongoing support and updates for continued excellence',
    'Effective Google Play optimization for better reach',
    'Seamless integration with Google services',
  ];

  const cardContent = [
    {
      icon: <FaAndroid size={80} color='#172554' />, 
      title: 'Custom Android Development',
      description: 'Develop bespoke Android applications tailored to your specific business needs and objectives.',
    },
    {
      icon: <FaCode size={80} color='#172554' />, 
      title: 'Code Optimization',
      description: 'Optimize code to ensure smooth performance and efficiency of your Android applications.',
    },
    {
      icon: <FaGooglePlay size={80} color='#172554' />, 
      title: 'Google Play Integration',
      description: 'Ensure your app is optimized for the Google Play Store for better visibility and downloads.',
    },
    {
      icon: <FaMobileAlt size={80} color='#172554' />, 
      title: 'Performance Enhancement',
      description: 'Optimize your app’s performance to deliver a seamless experience on all Android devices.',
    },
  ];

  return (
    <div className="container-fluid">
      <header style={headerStyle}>
        <h2 className="md:text-7xl font-bold font-[playfair-display]">Android Apps</h2>
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

export default AndroidAppServices;
