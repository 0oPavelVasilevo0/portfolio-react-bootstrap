import React from 'react'
import { Card, Col, Container, Dropdown, DropdownButton, Form, Nav, NavDropdown, NavLink, Navbar, Row } from 'react-bootstrap'
import { BsGithub, BsInstagram, BsTelegram } from 'react-icons/bs'
import './../styles.css';

const Footer = () => {
  return (
    <footer class="py-3  bg-dark bg-gradient border-info border-top border-2 ">
      {/* <Container> */}
        <Container >
          {/* <Row xs={1} md={3} className="g-4"> */}
        <Row className="g-4">
          <Col md='auto' className='text-center'>
              <BsInstagram className='icon' />
              <BsGithub className='icon' />
              <BsTelegram className='icon' />
            </Col>
            <Col>

            </Col>
          <Col md='auto' className='text-center text-warning'>
              <Container >
                this site is written using the
                <br />
              <NavLink className='text-info' href='https://react-bootstrap.github.io/docs/components/navbar#home'>
                  React-Bootstrap library

                </NavLink>
              </Container>
              {/* <Dropdown className="d-inline" autoClose="outside" class="ms-auto">
                  <Dropdown.Toggle id="dropdown-autoclose-outside">
                    Email me
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Card className=" bg-dark text-white" style={{ width: '18rem' }}>
                    
                      <Card.Body>
                        <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Dropdown.Menu>
                </Dropdown> */}

            </Col>
          </Row>
        {/* </Container> */}
        
      </Container>
      <Container>
        <hr className='hr text-info' />
      </Container>
      <Container className='px-4'>
        <p class='text-center text-white'>
          Copyright &copy; PAWASIL
        </p>
      </ Container >



    </footer>
  )
}

export default Footer