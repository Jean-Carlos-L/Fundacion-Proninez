import axios from "axios";
import { Modal, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import Swal from "sweetalert2";

export const RegistrarComunidad = ({ props }) => {
  const { show, handleClose, newComunidad, setNewComunidad } = props;

  const handleFields = (e) => {
    const { name, value } = e.target;
    setNewComunidad({
      ...newComunidad,
      [name]: value,
    });
  };

  const onRegistrar = async (e) => {
    try {
      e.preventDefault();
      let validated = true;
      for (let key in newComunidad) {
        if (newComunidad[key] === "") {
          validated = false;
          break;
        }
      }

      if (validated) {
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/comunidades`;
        const { data } = await axios.post(url, newComunidad);
        setNewComunidad({ nombre: "", etnia: "" });

        Swal.fire({
          icon: "success",
          title: "Exitoso",
          text: data.msg,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ooopss...",
          text: "Todos los campos son obligatorios",
        });
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Ooopss...",
        text: e.getMessage,
      });
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      backdrop="static"
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title>Registrar nueva comunidad</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <h6>Datos Comunidad</h6>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel label="Nombre" className="mb-3">
                <Form.Control
                  placeholder="Nombre"
                  name="nombre"
                  value={newComunidad.nombre}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel label="Etnia" className="mb-3">
                <Form.Control
                  placeholder="Etnia"
                  name="etnia"
                  value={newComunidad.etnia}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="dark" onClick={onRegistrar}>
          Registrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
