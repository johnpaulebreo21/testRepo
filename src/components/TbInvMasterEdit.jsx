import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TbInvMasterEdit = (props) => {
    console.log("JP")
    const [show, setShow] = useState(false); 
    const handleClose = () => {
        setShow(false); 
        props.handleChange();
    }
    const handleShow = () => {
        setShow(true); 
        
    };
 
    useEffect(() => {
        // Update the document title using the browser API
       setShow(props.Show) 
       
      },[props.Show]);
    
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>

    );
}

export default TbInvMasterEdit