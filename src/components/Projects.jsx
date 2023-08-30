import React from 'react'
import { Card, CardGroup, Col, Container, ListGroup, Row } from 'react-bootstrap'
import BtnOpenModal from './BtnOpenModal'
import CarouselImg from './CarouselImg'
import BtnModal from './BtnModal'

const Projects = () => {
  return (
    <Container fluid className='bg-secondary'>
      <Container style={{ minHeight: '100vh' }} >
        This is Projects
          <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                  <Col key={idx}>
                      <Card border="info" bg="secondary bg-gradient" data-bs-theme="dark">
                          <Card.Img variant="top" src="holder.js/100px160" />
                          <Card.Body>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit
                                  longer.
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    {/* <CarouselImg /> */}
                      {/* <Card.Link href="#">Card Link</Card.Link> */}
                      {/* <Card.Link href="#">Another Link</Card.Link> */}
                      <BtnOpenModal />
                      {/* <BtnModal /> */}
                  </Card.Body>
              </Card>
            
          {/* <hr className="hr hr-blurry" /> */}
        </Container>
      </Container>
  )
}

export default Projects