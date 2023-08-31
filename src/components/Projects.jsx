import React from 'react'
import { Card, CardGroup, Col, Container, ListGroup, Row } from 'react-bootstrap'
import BtnOpenModal from './UI-components/BtnOpenModal'
import CarouselImg from './UI-components/CarouselImg'
import screen from "./../img/Screen1.png"

const Projects = () => {
  return (
    <Container fluid className='bg-secondary'>
      <Container style={{ minHeight: '100vh' }} >
        This is Projects
          {/* <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                  <Col key={idx}>
                      <Card border="info" bg="secondary bg-gradient" data-bs-theme="dark">
                          <Card.Img variant="top" src={screen} />
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
          </Row> */}
              <Row xs={1} md={2} className="g-4">
              {/* <Card style={{ width: '28rem' }}> */}
              <Col>
                  <Card border="dark" bg="secondary bg-gradient" data-bs-theme="dark">
                  <Card.Img variant="top" src={screen} />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                  </Card.Body>
                  {/* <ListGroup className="list-group-flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup> */}
                  <Card.Body>
                    {/* <CarouselImg /> */}
                      {/* <Card.Link href="#">Card Link</Card.Link> */}
                      {/* <Card.Link href="#">Another Link</Card.Link> */}
                      <BtnOpenModal />
                      {/* <BtnModal /> */}
                  </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card border="danger" bg="secondary bg-gradient" data-bs-theme="dark">
                  <Card.Img variant="top" src={screen} />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                  </Card.Body>
                  {/* <ListGroup className="list-group-flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup> */}
                  <Card.Body>
                    {/* <CarouselImg /> */}
                      {/* <Card.Link href="#">Card Link</Card.Link> */}
                      {/* <Card.Link href="#">Another Link</Card.Link> */}
                      <BtnOpenModal />
                      {/* <BtnModal /> */}
                  </Card.Body>
              </Card>
                  </Col>
                  <Col>
                      <Card border="success" bg="secondary bg-gradient" data-bs-theme="dark">
                          <Card.Img variant="top" src={screen} />
                          <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                  Some quick example text to build on the card title and make up the
                                  bulk of the card's content.
                              </Card.Text>
                          </Card.Body>
                          {/* <ListGroup className="list-group-flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup> */}
                          <Card.Body>
                              {/* <CarouselImg /> */}
                              {/* <Card.Link href="#">Card Link</Card.Link> */}
                              {/* <Card.Link href="#">Another Link</Card.Link> */}
                              <BtnOpenModal />
                              {/* <BtnModal /> */}
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col>
                      <Card border="info" bg="secondary bg-gradient" data-bs-theme="dark">
                          <Card.Img variant="top" src={screen} />
                          <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                  Some quick example text to build on the card title and make up the
                                  bulk of the card's content.
                              </Card.Text>
                          </Card.Body>
                          {/* <ListGroup className="list-group-flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup> */}
                          <Card.Body>
                              {/* <CarouselImg /> */}
                              {/* <Card.Link href="#">Card Link</Card.Link> */}
                              {/* <Card.Link href="#">Another Link</Card.Link> */}
                              <BtnOpenModal />
                              {/* <BtnModal /> */}
                          </Card.Body>
                      </Card>
                  </Col>
              </Row>
            
          {/* <hr className="hr hr-blurry" /> */}
        </Container>
      </Container>
  )
}

export default Projects