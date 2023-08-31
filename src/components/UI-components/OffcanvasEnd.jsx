import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const OffcanvasEnd = ({ placement }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
      <>
          <Button variant="secondary" onClick={handleShow} className="ms-2 bg-gradient">
             more about
          </Button>
          <Offcanvas className='bg-secondary text-light' show={show} onHide={handleClose} placement={placement}>
              <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you
                  have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
          </Offcanvas>
      </>
  )
}

export default OffcanvasEnd