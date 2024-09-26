import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CRMSection = () => {
  return (
    <Container className="my-5">
      {/* First Section */}
      <Row className="align-items-start mb-5">
        <Col md={4}>
          <h3 className="font-weight-bold">CRM Software additional development services in the USA:</h3>
        </Col>
        <Col md={8}>
          <p>
            We are the most renowned CRM software development firm, with applications that aid in creating close
            links with existing and prospective customers, keeping track of interactions, managing customer data,
            including leads, storing them, and boosting sales by leveraging consumer information from multiple platforms
            for contact like email, mobile phones, blogs, social media, for instance. Codility Solutions is the premium
            solution provider of high-quality systems of Customer Relationship Management (CRM) applications across the
            globe. CRM automation systems can collect, monitor, and analyze data on every customer experience across
            different networks to offer personalized customer experiences and improve relations with customers in
            distribution, marketing, and customer support.
          </p>
        </Col>
      </Row>

      {/* Second Section */}
      <Row className="align-items-start">
        <Col md={4}>
          <h3 className="font-weight-bold">Custom CRM software development Solutions:</h3>
        </Col>
        <Col md={8}>
          <p>
            We provide customized CRM solutions and services to improve the efficiency of CRM and make it more accessible.
            Our customer support squad will take care of your customer relations and engagement by utilizing our digitally
            efficient CRM technology that provides customizable dashboards for managing subscriptions, sales tracking
            promotions, loyalty schemes, management, etc. Codility Solutions will not necessarily follow the guidelines
            given to them, but they will provide their own opinions and ideas regarding what's best to expand your
            business. We maintain a history of our system for managing contacts offering custom-made CRM services. Our
            CRM program designers design modules for custom CRM development like reliability, performance analysis, and
            custom KPI monitoring and development. We offer integrated logging management procedures for real-time
            monitoring data and generating leads to help businesses manage lead opportunities and prospective customers.
            Our effective CRM focuses on the retention of customers and is essential to growing revenues.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CRMSection;
