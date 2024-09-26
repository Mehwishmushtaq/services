import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ConsultantCard = () => {

  // Function to handle the call action when button is clicked
  const handleCall = () => {
    window.location.href = "tel:+92 1234567";
  };

  return (
    <Container className="mt-5">
      <Row>
        {/* Consultant Contact Section */}
        <Col md={4}>
          <Card className="text-center bg-dark text-white p-4">
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/headset.png"
                  alt="Consultant Icon"
                  className="mb-3"
                />
              </div>
              <Card.Title>Let's talk with a consultant</Card.Title>
              <button
                onClick={handleCall}
                className="bg-white text-gray-700 mt-3 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                +92 3231234567
              </button>
              <Card.Text className="mt-3">info@Virgosofts.co</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* SDLC Content Section */}
        <Col md={8}>
          <div className="content-box">
            <h3>Software Development Life Cycle (SDLC):</h3>
            <p>
              It is a process we use to design, develop, and test high-quality
              software. Codility Solutions uses this process to produce
              high-quality software that meets customer expectations, reaches
              completion within time, and meets cost estimates. It consists of
              a detailed plan outlining how specific software can be created,
              handled, replaced, and upgraded. The life cycle defines a
              methodology for optimizing the efficiency of applications and
              overall development processes.
            </p>

            <h3>Agile Software Development Life Cycle:</h3>
            <p>
              We use Agile SDLC methodology because we believe that every
              project needs to be handled differently and the existing methods
              need to be tailored to best suit the project requirements. In
              Agile, the tasks are divided into small time frames to deliver
              specific features for a release. We ensure a flexible approach by
              using agile product development if scenarios change quickly.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ConsultantCard;
