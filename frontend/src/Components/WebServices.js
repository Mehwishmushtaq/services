import React from "react";

const WebDevelopmentServices = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "We offer comprehensive full-stack web development services, specializing in front-end technologies like ReactJS, Angular, and Vue.js, as well as backend systems using Node.js, Express, and MongoDB.",
    },
    {
      title: "Custom Web Application Development",
      description:
        "Our team builds custom web applications tailored to your business needs, incorporating responsive design, modern user interfaces, and seamless user experiences using the latest technologies.",
    },
    {
      title: "API Development & Integration",
      description:
        "We provide API development and third-party integration services, allowing you to seamlessly connect your web application with external systems such as CRM, ERP, and other business platforms.",
    },
    {
      title: "Cloud Hosting & DevOps",
      description:
        "Our cloud hosting services ensure your web applications are scalable and secure. We work with AWS, Google Cloud, and Azure, incorporating CI/CD pipelines for continuous integration and deployment.",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "We develop high-performance e-commerce platforms with secure payment gateways, product management systems, and inventory solutions using frameworks like Shopify, WooCommerce, and custom-built systems.",
    },
    {
      title: "Mobile-First & Responsive Design",
      description:
        "Our team focuses on creating mobile-first, responsive web designs that provide a seamless experience across all devices, ensuring your website performs well on desktops, tablets, and smartphones.",
    },
    {
      title: "Web Security & Performance Optimization",
      description:
        "We implement advanced security protocols, including SSL, encryption, and firewall configurations, along with performance optimization techniques like caching and code minification to keep your web application fast and secure.",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div className="col-md-6">
              <h5 className="font-weight-bold">{service.title}</h5>
            </div>
            <div className="col-md-6">
              <p>{service.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentServices;
