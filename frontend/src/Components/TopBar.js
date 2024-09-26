import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-configThird text-white custom-top-bar d-none d-md-block text-md font-[plafair-display]">
      <Container fluid>
        <Row className="align-items-center">
          {/* Left Section with Welcome Text, Location, Phone, Email */}
          <Col md={12}>
            <Row className="align-items-center">
              <Col md={12} className="d-flex justify-content-between align-items-center">
                <span className="d-flex align-items-center">
                  <FaMapMarkerAlt className="me-2" />
                  447 Broadway, 2nd Floor Suite #791, New York, NY, 10013, USA
                </span>
                <span className="d-flex align-items-center ms-4">
                  <FaPhoneAlt className="me-2" />
                  +1 747 294 2023
                </span>
                <span className="d-flex align-items-center ms-4">
                  <FaEnvelope className="me-2" />
                  info@Virgosofts.com
                </span>
                <div className="d-flex flex-row align-items-center justify-content-end">
                  <Link to="/linkedin" className="text-white me-3">
                    <FaLinkedin />
                  </Link>
                  <Link to="/facebook" className="text-white me-3">
                    <FaFacebookF />
                  </Link>
                  <Link to="/twitter" className="text-white me-3">
                    <FaTwitter />
                  </Link>
                  <Link to="/instagram" className="text-white">
                    <FaInstagram />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
