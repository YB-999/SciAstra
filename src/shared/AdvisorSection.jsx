import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import './AdvisorSection.css'; 
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.png'

const AdvisorSection = () => {
    const advisors = [
        {
          image: p1,
          name: 'Michael Johnson',
          designation: 'AI Researcher',
          college: 'DEF University',
        },
        {
          image: p2,
          name: 'Sarah Williams',
          designation: 'Product Manager',
          college: 'GHI University',
        },
        {
          image: p3,
          name: 'Sarah Williams',
          designation: 'Product Manager',
          college: 'GHI University',
        },
        {
          image: p4,
          name: 'Sarah Williams',
          designation: 'Product Manager',
          college: 'GHI University',
        },
        // Add more advisors
      ];

  return (
    <div className="advisor_section">
      <Container className='advisor_container'>
        <h2>Mentor and Advisor</h2>
        <Row>
          {advisors.map((advisor, index) => (
            <Col key={index} xs="12" sm="6" md="4" lg="4" className="mb-4">
              <Card style={{ border: 'none' }} className='advisor_card'>
                <div className="advisor-img">
                  <CardImg top width="100%" src={advisor.image} alt={advisor.name} />
                </div>
                <CardBody className='advisor_body'>
                  <CardTitle>{advisor.name}</CardTitle>
                  <CardText>{advisor.designation}</CardText>
                  <CardText>{advisor.college}</CardText>
                  <Button className='primary__btn'>Message Him Now</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AdvisorSection;
