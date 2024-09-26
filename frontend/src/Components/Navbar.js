import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBattleNet } from "react-icons/fa";
import TopBar from './TopBar';

const CustomNavbar = () => {
  return (
    <>
      {/* TopBar with contact info and social links */}
      <TopBar />

      {/* Main Navbar */}
      <Navbar bg="light" expand="lg" className='font-[plafair-display]'>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <FaBattleNet size={24} className="mr-2" />
            <span>Virgosofts</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {/* Company Menu */}
              <NavDropdown title="Company" id="company-nav-dropdown">
                <NavDropdown.Item as={Link} to="/about-menu">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/our-process">Our Process</NavDropdown.Item>
              </NavDropdown>

              {/* Services Menu */}
              <NavDropdown title="Services" id="services-nav-dropdown">
                <NavDropdown.Item as={Link} to="/web-app-development">
                  Web App Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mobile-apps">
                  Mobile Apps
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/graphic-designing">
                  Graphic Designing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/digital-marketing">
                  Digital Marketing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/crm-development">
                  CRM Softwares
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dev-ops">
                  DevOps
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ios-apps">
                  IOS Apps
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/android-apps">
                  Android Apps
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/crm-development">
                  Other Services
                </NavDropdown.Item>
              </NavDropdown>

              {/* Other Menus */}
              <Nav.Link as={Link} to="/portfolio">Our Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/technologies">Technologies</Nav.Link>
              <Nav.Link as={Link} to="/our-blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>

            </Nav>

            {/* Get a Quote Button */}
            <Link to="/contact-us">
              <button className="bg-configPrimary text-white px-4 py-2 rounded-full">
                Get a Quote
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
