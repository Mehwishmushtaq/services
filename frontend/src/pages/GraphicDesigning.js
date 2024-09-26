import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaPaintBrush, FaPalette, FaFileImage, FaVectorSquare } from 'react-icons/fa'; 
import HomeContact from '../Components/HomeContact';
import ContactImg from '../assets/banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const GraphicDesigning = () => {
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
      title: 'Brand Identity Design',
      description: 'Creating impactful brand identities that resonate with your audience and reflect your brand values.',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and user-friendly interfaces for an enhanced user experience across digital platforms.',
    },
    {
      title: 'Print Design',
      description: 'Crafting visually appealing print materials such as brochures, flyers, and business cards that make a strong impression.',
    },
    {
      title: 'Illustrations',
      description: 'Producing custom illustrations to add a unique touch to your marketing and branding materials.',
    },
    {
      title: 'Web Graphics',
      description: 'Designing engaging web graphics that enhance the visual appeal and functionality of your website.',
    },
    {
      title: 'Packaging Design',
      description: 'Creating attractive and functional packaging designs that captivate your target audience and elevate your product.',
    },
  ];

  const whyChooseUs = [
    'Creative and innovative design solutions',
    'Experienced team of graphic designers',
    'Attention to detail and quality',
    'Timely delivery of projects',
    'Custom designs tailored to your needs',
    'Competitive pricing and transparent process',
  ];

  const cardContent = [
    {
      icon: <FaPaintBrush size={80} color='#172554' />,
      title: 'Creative Designs',
      description: 'We offer creative and custom design solutions to meet your unique needs.',
    },
    {
      icon: <FaPalette size={80} color='#172554' />,
      title: 'Brand Identity',
      description: 'Our designs help you establish a strong brand identity that stands out in the market.',
    },
    {
      icon: <FaFileImage size={80} color='#172554' />,
      title: 'Print & Digital Media',
      description: 'We design for both print and digital media to ensure your brand message is consistent across all platforms.',
    },
    {
      icon: <FaVectorSquare size={80} color='#172554' />,
      title: 'Illustrations & Graphics',
      description: 'Custom illustrations and graphics to enhance the visual appeal of your brand and marketing materials.',
    },
  ];

  return (
    <div className="container-fluid">
      <header style={headerStyle}>
        <h2 className="md:text-7xl font-bold font-[playfair-display]">Graphic Designing</h2>
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

export default GraphicDesigning;
