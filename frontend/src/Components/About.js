import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutImg from '../assets/services.jpeg'

const AboutHome = () => {
  return (
    <div className="container-fluid my-5 bg-configSecond">
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center">
          <img
            src={AboutImg}
            alt="Team working"
            className="img-fluid"
          />
          <button className="bg-configPrimary font-[display-fair] text-white mt-3 mb-3 px-7 py-2 rounded-full">About Us</button>
        </div>
        <div className="col-md-6 mt-4">
          <h2 className="mb-4 text-center md:text-3xl font-[display-fair]">Who we are</h2>
          <p className='font-[display-fair] mx-lg-5' style={{ fontSize: '18px', textAlign: 'justify' }}>
            Virgosofts is providing solutions based on state-of-the-art technologies in web and mobile application development.
            We are a full-cycle software development firm with multi-dimensional expertise from developing a complete platform to improving existing technologies.
            We value our clients and prioritize their requirements by providing services in a foresight manner having the ability to turn their concept into reality.
            We have been providing services to various companies to achieve their goals with influential and effective business solutions.
            Our secure and reliable solutions created our mark among renowned brands worldwide.
          </p>
          <ul className="list-style-disc ps-4 mt-5 font-[display-fair] mx-lg-5">
            <li className="mb-2">Full-Cycle Software Development Company.</li>
            <li className="mb-2">15 Years of Expertise in providing Tech Solutions.</li>
            <li className="mb-4">Agile Certified Resources.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
