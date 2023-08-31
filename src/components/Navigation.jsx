import React from 'react';

import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import DarkMode from './UI-components/DarkMode';
import OffcanvasEnd from './UI-components/OffcanvasEnd';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <Navbar sticky='top' expand="lg" bg="dark bg-gradient" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className='text-info' >Pavel Vasilev</Navbar.Brand>
                {/* <OffcanvasEnd /> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {/* <LinkContainer to="/">Home</LinkContainer> */}
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <NavDropdown title="My tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://my-app-iota-blush.vercel.app/">Contact Manager</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Calculator</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Drum Machine</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <DarkMode /> */}
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;