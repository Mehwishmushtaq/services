import React from 'react';
import { Container, Card, Carousel } from 'react-bootstrap';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        image: 'https://via.placeholder.com/100',
        role: 'CEO, Example Inc.',
        testimonial: 'This company transformed our business with their outstanding service and dedication.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: 'https://via.placeholder.com/100',
        role: 'CTO, Tech Solutions',
        testimonial: 'Their expertise in software development is unmatched. We saw significant growth!',
    },
    {
        id: 3,
        name: 'Michael Scott',
        image: 'https://via.placeholder.com/100',
        role: 'Manager, Dunder Mifflin',
        testimonial: 'A fantastic team that helped us streamline our processes and increase productivity.',
    },
];

const Testimonials = () => {
    return (
        <Container className="my-5 py-5 bg-configSecond">
            <h2 className="text-center mb-3 font-[display-fair] md:text-5xl font-bold">Testimonials</h2>
            <h2 className="text-center mb-5 font-[display-fair] text-2xl font-bold">What Our Clients Say</h2>
            

            <Carousel 
                className="w-75 mx-auto" 
                controls={false} 
                indicators={false} 
                interval={3000} 
                pause={false} 
            >
                {testimonials.map(testimonial => (
                    <Carousel.Item key={testimonial.id}>
                        <Card className="text-center border-0 shadow mx-auto" style={{ maxWidth: '700px' }}>
                            <Card.Body>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-circle mb-3"
                                    width="100"
                                    height="100"
                                />
                                <Card.Title>{testimonial.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{testimonial.role}</Card.Subtitle>
                                <Card.Text>{testimonial.testimonial}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default Testimonials;
