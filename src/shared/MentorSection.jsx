import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import './MentorSection.css'; 
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.jpg'

const MentorsSection = () => {
    const mentors = [
        {
          image: p1,
          name: 'Vivek Dwivedi',
          designation: 'Founder SciAstra',
          college: 'Masters Student at NISER',
        },
        {
          image: p2,
          name: 'Akhil',
          designation: 'Co-Founder SciAstra',
          college: 'Masters Student at NISER',
        },
        {
          image: p1,          
          name: 'Abhay Gupta',
          designation: 'Physics',
          college: 'IIT Bombay',
        },
        {
          image: p5,
          name: 'Tiasha Das',
          designation: 'Biology',
          college: 'IISER Berhampur',
        },
        {
          image: p4,
          name: 'Adityarup Laha',
          designation: 'Mathematics',
          college: 'ISI, Kolkata',
        },
        {
          image: p3,
          name: 'Shruti',
          designation: 'Chemistry',
          college: 'CEBS,Mumbai',
        },

        // Add more mentors
      ];

  return (
    <div className="mentors_section">
      <Container className='mentor_container'>
        <h2>Meet Your Mentors</h2>
        <Row>
          {mentors.map((mentor, index) => (
            <Col key={index} xs="12" sm="6" md="4" lg="3" className="mb-4">
              <Card className='mentor_card' style={{ border: 'none' }}>
                <div className="mentor-img">
                  <CardImg top width="100%" src={mentor.image} alt={mentor.name} />
                </div>
                <CardBody className='mentor_body'>
                  <CardTitle className='mentor_title'>{mentor.name}</CardTitle>
                  <CardText>{mentor.designation}</CardText>
                  <CardText>{mentor.college}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MentorsSection;
