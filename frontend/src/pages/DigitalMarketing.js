import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaChartLine, FaBullhorn, FaGoogle, FaFacebook } from 'react-icons/fa'; 
import HomeContact from '../Components/HomeContact';
import ContactImg from '../assets/banner.png'; // Update image to match digital marketing theme
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const DigitalMarketing = () => {
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
      title: 'SEO (Search Engine Optimization)',
      description: 'Improving your website’s visibility on search engines to drive organic traffic and increase search engine rankings.',
    },
    {
      title: 'PPC (Pay-Per-Click) Advertising',
      description: 'Running targeted ad campaigns on platforms like Google Ads and Bing Ads to attract potential customers and generate leads.',
    },
    {
      title: 'Social Media Marketing',
      description: 'Creating and managing social media campaigns across platforms such as Facebook, Instagram, and LinkedIn to boost brand awareness and engagement.',
    },
    {
      title: 'Content Marketing',
      description: 'Developing and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.',
    },
    {
      title: 'Email Marketing',
      description: 'Designing and executing email campaigns to nurture leads, build customer relationships, and drive conversions.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Monitoring and analyzing marketing performance to provide actionable insights and optimize strategies for better results.',
    },
  ];

  const whyChooseUs = [
    'Proven strategies for digital marketing success',
    'Expert team with in-depth industry knowledge',
    'Data-driven approach for optimal results',
    'Customized solutions tailored to your business goals',
    'Transparent reporting and regular updates',
    'Competitive pricing with a focus on ROI',
  ];

  const cardContent = [
    {
      icon: <FaChartLine size={80} color='#172554' />,
      title: 'SEO Services',
      description: 'Enhancing your website’s visibility and search engine rankings through effective SEO strategies.',
    },
    {
      icon: <FaBullhorn size={80} color='#172554' />,
      title: 'PPC Advertising',
      description: 'Running targeted ads to drive immediate traffic and generate leads for your business.',
    },
    {
      icon: <FaFacebook size={80} color='#172554' />,
      title: 'Social Media Marketing',
      description: 'Managing and optimizing your social media presence to increase brand awareness and engagement.',
    },
    {
      icon: <FaGoogle size={80} color='#172554' />,
      title: 'Email Marketing',
      description: 'Crafting and executing effective email campaigns to nurture leads and build customer relationships.',
    },
  ];

  return (
    <div className="container-fluid">
      <header style={headerStyle}>
        <h2 className="md:text-7xl font-bold font-[playfair-display]">Digital Marketing Services</h2>
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

export default DigitalMarketing;
