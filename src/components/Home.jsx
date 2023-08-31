import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles.css';
import OffcanvasEnd from './UI-components/OffcanvasEnd';

const Home = () => {
  return (
      // <Container  style={{height: "100vh", margin: '0'}}>

      <Container fluid className='title'>
      <Container fluid className='mask'>
        {/* <Container style={{ minHeight: '100vh',  }}> */}
          <Container className='header'>
          <header className='text-center text-light'>
        <h1 className='lead text-info '>Blablabla</h1>
        <p>Hello, my name is Pavel. I am frontend development</p>
            <p>This world of development has no end... This is a very painstaking and creative work. When I started learning code, I realized how exciting and interesting it was.</p>
            <OffcanvasEnd placement="end" name="end" />
          </header>
          
        </Container>
    </Container>
          </Container>
          

  )
}

export default Home