import React, { useState } from 'react'
import ModalWindow from './ModalWindow'
import { Button } from 'react-bootstrap';

const BtnOpenModal = () => {
    const [modalShow, setModalShow] = useState(false);

  return (
      <>
          <Button variant="primary" onClick={() => setModalShow(true)}>
              Open
          </Button>

          <ModalWindow 
              show={modalShow}
              onHide={() => setModalShow(false)}
          />
      </>
  )
}

export default BtnOpenModal