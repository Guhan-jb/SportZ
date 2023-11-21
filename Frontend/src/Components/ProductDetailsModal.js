import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductDetailsModal = ({ show, onHide, product }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product.productName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={process.env.PUBLIC_URL + product.productImage} alt={product.productName} />
        <p>{product.description}</p>
        {/* Add more product details here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetailsModal;
