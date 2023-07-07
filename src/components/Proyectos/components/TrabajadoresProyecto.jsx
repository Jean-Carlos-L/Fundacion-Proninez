import { Modal, Button, ListGroup } from "react-bootstrap";

function TrabajadoresProyecto({
  responsable,
  profesionales,
  handleClose,
  show,
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="sm"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Trabajadores</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong className="me-1">Responsable: </strong>
            {responsable}
          </ListGroup.Item>
          {profesionales.map((profesional, i) => (
            <ListGroup.Item key={i}>
              <strong className="me-1">Profesional:</strong>
              {profesional}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TrabajadoresProyecto;
