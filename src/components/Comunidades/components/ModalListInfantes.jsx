import { useState } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { ListInfantes } from "./ListInfantes";

export const ModalListInfantes = ({ infantes }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
        Población <Badge bg="secondary">{infantes.length}</Badge>
        <span className="visually-hidden">Niños</span>
      </Button>
      <Modal show={show} onHide={() => setShow(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Niños</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListInfantes infantes={infantes} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
