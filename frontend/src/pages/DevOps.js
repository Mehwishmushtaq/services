import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaAws, FaChartBar, FaCog, FaCloud } from 'react-icons/fa';
import HomeContact from '../Components/HomeContact';
import ContactImg from '../assets/banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const DevOps = () => {
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
      title: 'Continuous Integration & Continuous Deployment (CI/CD)',
      description: 'Automate your development pipeline to deliver updates faster and more reliably through our CI/CD expertise.',
    },
    {
      title: 'Cloud Infrastructure Setup (AWS, Azure, GCP)',
      description: 'Leverage scalable and secure cloud infrastructure on platforms like AWS, Azure, and Google Cloud.',
    },
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'Manage your infrastructure efficiently with Infrastructure as Code (IaC) using tools like Terraform and AWS CloudFormation.',
    },
    {
      title: 'Monitoring & Logging',
      description: 'Implement comprehensive monitoring and logging solutions to ensure system health and performance with AWS CloudWatch and ELK Stack.',
    },
    {
      title: 'Automated Testing',
      description: 'Ensure the quality and reliability of your applications by integrating automated testing into your DevOps pipeline.',
    },
    {
      title: 'AWS DevOps Services',
      description: 'Leverage AWS DevOps services like CodeBuild, CodeDeploy, and CodePipeline for seamless automation of your software development lifecycle.',
    },
  ];

  const whyChooseUs = [
    'Experienced DevOps team with expertise in cloud platforms',
    'End-to-end automation and streamlined processes',
    'Cost-efficient solutions for high scalability and availability',
    'Tailored DevOps strategies for your business needs',
    'Proficiency in AWS, Azure, GCP, and other major platforms',
    '24/7 monitoring and support to ensure smooth operations',
  ];

  const cardContent = [
    {
      icon: <FaAws size={80} color='#172554' />,
      title: 'AWS Services',
      description: 'Utilize AWS services for scalable cloud solutions, including storage, compute power, and databases.',
    },
    {
      icon: <FaCloud size={80} color='#172554' />,
      title: 'Cloud Infrastructure Setup',
      description: 'Implement and manage scalable cloud solutions on platforms like AWS, Azure, and GCP.',
    },
    {
      icon: <FaChartBar size={80} color='#172554' />,
      title: 'Monitoring & Analytics',
      description: 'Utilize advanced tools for system monitoring and performance analytics to ensure optimal operations.',
    },
    {
      icon: <FaCog size={80} color='#172554' />,
      title: 'Custom DevOps Solutions',
      description: 'Tailor DevOps practices and tools to meet your specific business requirements and goals.',
    },
  ];

  return (
    <div className="container-fluid">
      <header style={headerStyle}>
        <h2 className="md:text-7xl font-bold font-[playfair-display]">DevOps Services</h2>
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
              <div className="card p-4 h-100 shadow-lg" >
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

export default DevOps;
