import React from "react";
import { Modal, Button } from "react-bootstrap";

const CertificateModal = ({ show, handleClose, secondPieceOfData }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Certificate Verification Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <img
                src={secondPieceOfData}
                alt=""
                width="200px"
                height="300px"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
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
