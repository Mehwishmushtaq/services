import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaDatabase, FaUsers, FaChartBar, FaCog } from 'react-icons/fa'; 
import HomeContact from '../Components/HomeContact';
import ContactImg from '../assets/banner.png'; // Update image to match CRM software theme
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const CRMSoftwareServices = () => {
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
      title: 'Customer Relationship Management',
      description: 'Centralize customer information to manage relationships effectively and enhance customer satisfaction.',
    },
    {
      title: 'Sales Automation',
      description: 'Streamline your sales process with automated workflows, tracking, and reporting to boost productivity.',
    },
    {
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns, track customer interactions, and generate leads with advanced CRM tools.',
    },
    {
      title: 'Customer Support & Service',
      description: 'Improve customer support with ticketing systems, knowledge bases, and integrated communication channels.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Gain insights into customer behavior and sales performance with detailed analytics and customizable reports.',
    },
    {
      title: 'Integration with Other Systems',
      description: 'Seamlessly integrate with other business systems and applications to ensure smooth data flow and operational efficiency.',
    },
  ];

  const whyChooseUs = [
    'Comprehensive CRM solutions tailored to your business needs',
    'User-friendly interfaces and customizable features',
    'Advanced analytics for data-driven decision-making',
    'Scalable and flexible solutions to grow with your business',
    'Dedicated support and maintenance services',
    'Competitive pricing with a focus on delivering value',
  ];

  const cardContent = [
    {
      icon: <FaDatabase size={80} color='#172554' />,
      title: 'Centralized Data Management',
      description: 'Store and manage all customer data in one place for easy access and better insights.',
    },
    {
      icon: <FaUsers size={80} color='#172554' />,
      title: 'Customer Management',
      description: 'Track and manage customer interactions to improve relationships and enhance service delivery.',
    },
    {
      icon: <FaChartBar size={80} color='#172554' />,
      title: 'Advanced Analytics',
      description: 'Utilize detailed analytics to monitor performance, track metrics, and make informed decisions.',
    },
    {
      icon: <FaCog size={80} color='#172554' />,
      title: 'Customizable Features',
      description: 'Customize CRM features and workflows to fit your specific business processes and requirements.',
    },
  ];

  return (
    <div className="container-fluid">
      <header style={headerStyle}>
        <h2 className="md:text-7xl font-bold font-[playfair-display]">CRM Software Services</h2>
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

export default CRMSoftwareServices;
