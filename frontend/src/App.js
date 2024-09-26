// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from './Components/Navbar';
import Home from './pages/Home'
import Footer from './Components/Footer';
import OurProcess from './pages/OurProcess';
import WebDevelopment from './pages/WebAppDevelopment';
import CRMDevelopment from './pages/CrmDevelopment';
import MobileApps from './pages/MobileApps';
import GraphicDesigning from './pages/GraphicDesigning';
import DigitalMarketing from './pages/DigitalMarketing';
import DevOps from './pages/DevOps';
import IOSAppServices from './pages/IOSApps';
import AndroidAppServices from './pages/AndroidApps';
import AboutMenu from './pages/AboutMenu'
import Portfolio from './pages/OurPortfolio';
import BlogPage from './pages/Blog';
import ContactUs from './pages/Contact';
import Technologies from './pages/Technologies';
import Login from "./Components/Login/login";
import SignUp from "./Components/SignUp/signup";


function App() {

  const user = localStorage.getItem("token");
  return (
    <Router>

      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/our-blogs" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/about-menu" element={<AboutMenu />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/crm-development" element={<CRMDevelopment />} />
        <Route path="/web-app-development" element={<WebDevelopment />} />
        <Route path="/graphic-designing"  element={<GraphicDesigning />} />
        <Route path="/mobile-apps" element={<MobileApps />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/dev-ops" element={<DevOps />} />
        <Route path="/ios-apps" element={<IOSAppServices />} />
        <Route path="/android-apps" element={<AndroidAppServices />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        {user && <Route path="/" exact element={< Home />} />}
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
