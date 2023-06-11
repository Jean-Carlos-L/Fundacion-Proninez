import { Modal, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import Swal from "sweetalert2";

export const RegistrarTrabajador = ({ props }) => {
  const { show, handleClose, newUser, setNewUser } = props;

  const handleFields = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const onRegistrar = (e) => {
    try {
      e.preventDefault();
      let validated = true;
      for (let key in newUser) {
        if (newUser[key] === "") {
          validated = false;
          break;
        }
      }

      if (validated) {
        console.log("newUser", newUser);
      } else {
        Swal.fire({
          icon: "error",
          title: "Ooopss...",
          text: "Todos los campos son obligatorios",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Registrar nuevo trabajador</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <FloatingLabel label="Documento" className="mb-3">
                <Form.Control
                  placeholder="Documento"
                  name="documento"
                  value={newUser.documento}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Email" className="mb-3">
                <Form.Control
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Nombre completo" className="mb-3">
                <Form.Control
                  placeholder="Nombre completo"
                  name="nombre_completo"
                  value={newUser.nombre_completo}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Salario" className="mb-3">
                <Form.Control
                  placeholder="Salario"
                  type="number"
                  name="salario"
                  value={newUser.salario}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Teléfono" className="mb-3">
                <Form.Control
                  placeholder="Teléfono"
                  name="telefono"
                  value={newUser.telefono}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Tipo trabajador" className="mb-3">
                <Form.Select
                  aria-label="Floating label select example"
                  name="tipo"
                  value={newUser.tipo}
                  onChange={handleFields}
                >
                  <option value="">Tipo trabajador</option>
                  <option value="Administrativo">Administrativo</option>
                  <option value="Profesional">Profesional</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Dirección" className="mb-3">
                <Form.Control
                  placeholder="Dirección"
                  name="direccion"
                  value={newUser.direccion}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Cargo/Especialidad" className="mb-3">
                <Form.Control
                  placeholder="Cargo/Especialidad"
                  name="cargo_especialidad"
                  value={newUser.cargo_especialidad}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Fecha nacimiento" className="mb-3">
                <Form.Control
                  placeholder="Fecha nacimiento"
                  name="fecha_nacimiento"
                  type="date"
                  value={newUser.fecha_nacimiento}
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
