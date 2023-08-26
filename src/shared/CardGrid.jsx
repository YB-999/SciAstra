import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import './cardgrid.css';

const CardGrid = () => {
  const cards = [
    {
      title: 'Cambridge University',
      imageUrl: 'https://i.ytimg.com/vi/LlCwHnp3kL4/sddefault.jpg?v=62262cff',
    },
    {
      title: 'Harward University',
      imageUrl: 'https://img.diverseeducation.com/files/base/diverse/all/image/2022/10/Harvard_University.633b09686b7cb.png?auto=format%2Ccompress&fit=max&q=70&w=1200',
    },
    {
      title: 'University of California',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1Whg1NqF3Xx9BDdcCyY4nzlOoWSzcF56Ng&usqp=CAU',
    },
    {
      title: 'ETH Zurich',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/56/ETHZ.JPG',
    },
    {
      title: 'Max Planck',
      imageUrl: 'https://www.mpi-marburg.mpg.de/544815/original-1571636975.jpg?t=eyJ3aWR0aCI6MTE0MCwiaGVpZ2h0Ijo0ODgsImZpdCI6ImNyb3AiLCJmaWxlX2V4dGVuc2lvbiI6ImpwZyIsIm9ial9pZCI6NTQ0ODE1fQ%3D%3D--37e15b81f53b18eac58514739febcd3d0198abe9',
    },
    {
      title: 'University of Edinburgh',
      imageUrl: 'https://cdn.britannica.com/97/126697-050-55D7CB5B/University-of-Edinburgh-St-Leonards-Hall-Scot.jpg',
    },
    {
      title: 'John Hopkins',
      imageUrl: 'https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university_logo_small_vertical_blue.png',
    },
    
    // Add more cards as needed
  ];

  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <Col key={index} xs="12" sm="6" md="4" lg="3" className="mb-4">
            <Card className='card_team'>
              <CardImg className='card_img' top width="100%" src={card.imageUrl} alt={card.title} />
              <CardBody className='card_body'>
                <CardTitle className='card_title'>{card.title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
