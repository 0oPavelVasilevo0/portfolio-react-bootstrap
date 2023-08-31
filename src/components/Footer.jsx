import React from 'react'
import { Col, Container, Dropdown, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
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
        <Container className='px-4'>
            <p class='text-center text-white'>
                Copyright &copy; PAWASIL
                </p> 
        <Container>
          <Row xs md={3} className="justify-content-md-center g-4">
            <Col>
              <BsInstagram className='icon' />
              </Col>
              <Col>
              <BsGithub className='icon' />
              </Col>
              <Col>
              <BsTelegram className='icon' />
            </Col>
          </Row>
        </Container>
        
        </Container>

    </footer>
  )
}

export default Footer