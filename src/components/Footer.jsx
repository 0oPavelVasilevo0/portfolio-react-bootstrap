import React from 'react'
import { Card, Col, Container, Dropdown, DropdownButton, Form, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { BsGithub, BsInstagram, BsTelegram } from 'react-icons/bs'
import './../styles.css';

const Footer = () => {
  return (
    //   <Container fluid className="bg-info">


    //       <p className='lead text-center align-middle py-4 my-0'>pawasil</p>
    //       <hr className='hr' />

    //       <Nav className='mx-auto' style={{width: '100px'}}>
    //       <NavDropdown title="Contacts" id="collasible-nav-dropdown" >
    //           <NavDropdown.Item href="#action/3.1">Whatsapp</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">Telegram</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Viber</NavDropdown.Item>
    //           {/* <NavDropdown.Divider /> */}
    //           {/* <NavDropdown.Item href="#action/3.4">
    //               Separated link
    //           </NavDropdown.Item> */}
    //       </NavDropdown>
    //       </Nav>

    // </Container>
    <footer class="py-3  bg-dark bg-gradient border-info border-top border-2 ">

      {/* <Container fluid> */}
      {/*  md={3} className="justify-content-md-center g-4" */}
      <Container>
        {/* <Row className="justify-content-md-center"> */}
        {/* <Col md="auto" > */}
        <Container >
          <Row className="g-4">
            <Col>
              <BsInstagram className='icon' />
              <BsGithub className='icon' />
              <BsTelegram className='icon' />
            </Col>
            <Col>
              <Container className='ms-auto'> 
                <Dropdown className="d-inline" autoClose="outside">
                  <Dropdown.Toggle id="dropdown-autoclose-outside">
                    Email me
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Card className=" bg-dark text-white" style={{ width: '18rem' }}>
                      <Card.Header>Email me</Card.Header>
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
                </Dropdown>
              </Container>
            </Col>
          </Row>
        </Container>
        {/* </Col> */}
        {/* </Row> */}
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