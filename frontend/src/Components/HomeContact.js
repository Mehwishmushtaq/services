import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container fluid className="p-5 mt-5" style={{ backgroundImage: `url('https://wallpapergod.com/images/hd/dark-blue-aesthetic-2560X1440-wallpaper-9mqa07ijo22qdebx.jpeg')`, backgroundSize: 'cover', color: 'white' }}>
      <Row>
        <Col md={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.910343128706!2d-74.00481468459365!3d40.72151807933011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25991f5bc0b7b%3A0xf453b9d8f60b1d12!2s447%20Broadway%2C%20New%20York%2C%20NY%2010013%2C%20USA!5e0!3m2!1sen!2s!4v1693845225794!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div className='font-[display-fair]'>
            <h3 className='md:text-3xl mb-3'>Find Us.</h3>
            <p className='mt-2'>447 Broadway, 2nd Floor Suite #791, New York, NY, 10013, United States</p>
            <p className='mt-2'>Ydergrænsen 14, 2600 Glostrup, Copenhagen, Denmark</p>
            <p className='mt-2'>house#23 A-block, Ferozepur Rd, Askari I Rehmanpura, Lahore, Punjab 5400</p>
            <h3 className='md:text-3xl mb-3 mt-3'>Call us.</h3>
            <p className='mt-2'>+1 747 294 2023</p>
            <p className='mt-2'>+45 2917 0335</p>
            <p className='mt-2'>+92 336 426 6468</p>
            <h3 className='md:text-3xl mb-3 mt-3'>Email us.</h3>
            <p>info@Virgosofts.co</p>
            <p className='mt-2'><a href="#sitemap" style={{ color: 'white' }}>Sitemap</a></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
