import React, { useState } from 'react'
import { Button, Container, Offcanvas } from 'react-bootstrap'
import ImgWindow from './ImgWindow';

const OffcanvasEnd = ({ placement }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
      <>
          <Button variant="secondary" onClick={handleShow} className="ms-2 bg-gradient">
             more about me
          </Button>
          <Offcanvas className='bg-secondary text-light' show={show} onHide={handleClose} placement={placement}>
              <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Hello World</Offcanvas.Title>
              </Offcanvas.Header>
             
                  <ImgWindow />
         
              {/* <Offcanvas.Body>
                <Container>
                      <ImgWindow />
                </Container>
                
                  Some text
              </Offcanvas.Body> */}
          </Offcanvas>
      </>
  )
}

export default OffcanvasEnd