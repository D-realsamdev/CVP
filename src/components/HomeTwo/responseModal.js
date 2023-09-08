import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CertificateModal = ({ show, handleClose, firstPieceOfData, secondPieceOfData }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Certificate Verification Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{firstPieceOfData}</p>
        <img src={secondPieceOfData} alt='' width='200px' height='300px' className='mx-auto'/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CertificateModal;
