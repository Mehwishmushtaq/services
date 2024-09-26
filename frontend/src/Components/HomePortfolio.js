import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Img1 from '../assets/swedishfall.jpg';
import Img2 from '../assets/chowmill.jpg';
import Img3 from '../assets/cudy.jpg';
import Img4 from '../assets/doyo.jpg';
import Img5 from '../assets/pencilit.jpg';
import Img6 from '../assets/habitat.jpg';
import Img7 from '../assets/aboki.jpg';
import Img8 from '../assets/process.png'






const HomePortfolio = () => {
  const portfolioItems = [
    { id: 1, image: Img1, description: 'Swedish Fall' },
    { id: 2, image: Img2, description: 'Chewwell' },
    { id: 3, image: Img3, description: 'Cutly' },
    { id: 4, image: Img4, description: 'Doyo' },
    { id: 5, image: Img5, description: 'Biotecture' },
    { id: 6, image: Img6, description: 'Pexit' },
    { id: 7, image: Img7, description: 'abokiFX' },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 md:text-5xl font-[display-fair] font-bold">Our Portfolio</h2>
      <Row>
        {portfolioItems.map(item => (
          <Col md={3} className="mb-4" key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="text-center mb-4 md:text-5xl font-[display-fair] font-bold">Our Process</h2>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <img className="img-fluid" src={Img8} alt="Our Process" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomePortfolio;
