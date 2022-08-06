import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EngineTwo from "../../Atom/EngineTwo";
const Query = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="grid grid-cols-1">
     <div className="lg:hidden block">
     <Button variant="primary" onClick={handleShow} className="w-full">
        Modify Search
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Modify Search</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>  <EngineTwo /></Modal.Body>
       
      </Modal>
     </div>
     <div className="lg:block hidden">
     <EngineTwo />
     </div>

      
      </div>
    </>
  );
};

export default Query;
