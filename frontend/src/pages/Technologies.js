import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContact from '../Components/HomeContact'
import reactImage from '../assets/react.jpg';
import angularImage from '../assets/angular.png';
import javaScriptImage from '../assets/javascript.png';
import phpImage from '../assets/php.jpg';
import laravelImage from '../assets/laravel.png'
import ContactImg from '../assets/ContactUS.svg'

const Technologies = () => {
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
    width: '100%'
  };

  return (

    <div className="container">
      <header style={headerStyle}>
        <h2 className='md:text-7xl font-bold font-[playfair-display]'>Technologies</h2>
      </header>
      {/* Frontend */}
      <h2 className="md:text-5xl text-center font-bold font-weight-bold mt-5" style={{ fontSize: '3rem', color: '#4AA9E1' }}>
        Front<span style={{ color: '#333' }}>end</span>
      </h2>

      <div className="row mt-5">
        {/* ReactJS Section */}
        <div className="col-md-6">
          <h3 className="md:text-5xl font-weight-bold text-center font-bold" style={{ color: '#333' }}>
            React<span style={{ color: '#4AA9E1' }}>JS</span>
          </h3>
          <p className="text-justify" style={{ fontSize: '1.2rem' }}>
            Virgosofts solutions create extremely user-friendly, flexible UI with the help of ReactJS. ReactJS is only concerned with providing information to the DOM, enabling React applications generally to use additional libraries to declare the board and control.
            <br /><br />
            It serves as a foundation for developing single-page programs and can adapt to various broad implementations.
          </p>
        </div>
        <div className="col-md-6">
          <img src={reactImage} alt="ReactJS" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-5">
        {/* AngularJS Section */}
        <div className="col-md-6">
          <img src={angularImage} alt="AngularJS" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3 className="md:text-5xl font-weight-bold text-center font-bold" style={{ color: '#333' }}>
            Angular<span style={{ color: '#4AA9E1' }}>JS</span>
          </h3>
          <p className="text-justify" style={{ fontSize: '1.2rem' }}>
            AngularJS is an open-source front-end system for web applications primarily managed by Google based on JavaScript. It is used to address a significant portion of the issues encountered when developing single-page apps, broadening the HTML language for application development.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        {/* JavaScript Section */}
        <div className="col-md-6">
          <h3 className="md:text-5xl font-weight-bold text-center font-bold" style={{ color: '#333' }}>
            Java<span style={{ color: '#4AA9E1' }}>Script</span>
          </h3>
          <p className="text-justify" style={{ fontSize: '1.2rem' }}>
            Virgosofts solutions create extremely user-friendly, flexible UI with the help of ReactJS. ReactJS is only concerned with providing information to the DOM, enabling React applications generally to use additional libraries to declare the board and control.
            <br /><br />
            It serves as a foundation for developing single-page programs and can adapt to various broad implementations.
          </p>
        </div>
        <div className="col-md-6">
          <img src={javaScriptImage} alt="JS" className="img-fluid" />
        </div>
      </div>

      {/* Backend */}
      <h2 className="md:text-5xl text-center font-bold font-weight-bold mt-5" style={{ fontSize: '3rem', color: '#4AA9E1' }}>
        Back<span style={{ color: '#333' }}>end</span>
      </h2>

      <div className="row mt-5">
        {/* PHP Section */}
        <div className="col-md-6">
          <h3 className="md:text-5xl font-weight-bold text-center font-bold" style={{ color: '#333' }}>
            PHP
          </h3>
          <p className="text-justify" style={{ fontSize: '1.2rem' }}>
            PHP is a programming language that allows server scripting. It's a versatile platform to render web pages that are interactive and dynamic. It offers databases, information as well as monitoring sessions, and even the creation of complete e-commerce websites are managed. We employ this technology on the server-side, which is integrated into HTML. PHP is a widely used stable, open and reliable release.
          </p>
        </div>
        <div className="col-md-6">
          <img src={phpImage} alt="php" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-5">
        {/* Laravel Section */}
        <div className="col-md-6">
          <img src={laravelImage} alt="laravel" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3 className="md:text-5xl font-weight-bold text-center font-bold" style={{ color: '#333' }}>
            Laravel
          </h3>
          <p className="text-justify" style={{ fontSize: '1.2rem' }}>
            Laravel is a web-based application development platform featuring a stunning, beautiful design and PHP framework. By making it easier to perform the common tasks in most web-based projects like authentication and filtering, sessions, and caching Laravel aids in taking the burden of development. This makes sure that the Laravel platform is utilized for web development from the backend. Model view controller (MVC) architecture is built into this top-rated platform.
          </p>
        </div>
      </div>
      <HomeContact />

    </div>
  );
};

export default Technologies;
