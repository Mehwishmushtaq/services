import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ContactImg from '../assets/ContactUS.svg'
import HomeContact from '../Components/HomeContact'

const OurPortfolio = () => {
  const portfolioItems = [
    { id: 1, title: 'Project 1', image: 'https://via.placeholder.com/300x200', description: 'Swedish Fall' },
    { id: 2, title: 'Project 2', image: 'https://via.placeholder.com/300x200', description: 'Chewwell' },
    { id: 3, title: 'Project 3', image: 'https://via.placeholder.com/300x200', description: 'Cutly' },
    { id: 4, title: 'Project 4', image: 'https://via.placeholder.com/300x200', description: 'Doyo' },
    { id: 5, title: 'Project 5', image: 'https://via.placeholder.com/300x200', description: 'Biotecture' },
    { id: 6, title: 'Project 6', image: 'https://via.placeholder.com/300x200', description: 'Pexit' },
    { id: 7, title: 'Project 7', image: 'https://via.placeholder.com/300x200', description: 'abokiFX' },
  ];

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
    <Container fluid>
      <header style={headerStyle}>
        <h2 className='md:text-7xl font-bold font-[playfair-display]'>Our Portfolio</h2>
      </header>
      <h2 className="text-center mb-4 md:text-5xl font-[display-fair] mt-5">Our Portfolio</h2>
      <Row>
        {portfolioItems.map(item => (
          <Col md={3} className="mb-4" key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <HomeContact />
    </Container>
  );
};

export default OurPortfolio;
