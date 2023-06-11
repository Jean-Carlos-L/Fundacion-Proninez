import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Form,
  Table,
  Button,
} from "react-bootstrap";
import { RegistrarTrabajador } from "./components/RegistrarTrabajador";

function Trabajadores() {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({
    documento: "",
    nombre_completo: "",
    telefono: "",
    tipo: "",
    cargo_especialidad: "",
    email: "",
    salario: 0,
    fecha_nacimiento: "",
    direccion: "",
  });

  const handleClose = () => {
    setNewUser({
      documento: "",
      nombre_completo: "",
      telefono: "",
      tipo: "",
      cargo_especialidad: "",
      email: "",
      salario: 0,
      fecha_nacimiento: "",
      direccion: "",
    });
    setShow(false);
  };

  return (
    <Container>
      <Row className="mb-3 text-center">
        <h1>
          <Badge bg="dark">TRABAJADORES</Badge>
        </h1>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col>
          <Form.Group as={Row}>
            <Form.Label column sm="3">
              Tipo trabajador:
            </Form.Label>
            <Col sm="">
              <Form.Select aria-label="Default select example" size="sm">
                <option value="">Tipo trabajador</option>
                <option value="Administrativo">Administrativo</option>
                <option value="Profesional">Profesional</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
        <Col className="text-end">
          <Button variant="dark" size="sm" onClick={() => setShow(true)}>
            Registrar nuevo
          </Button>
          <RegistrarTrabajador
            props={{ show, handleClose, newUser, setNewUser }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table className="text-center" responsive bordered striped>
            <thead>
              <tr>
                <th>DOCUMENTO</th>
                <th>NOMBRE</th>
                <th>EMAIL</th>
                <th>TELÉFONO</th>
                <th>DIRECCIÓN</th>
                <th>SALARIO</th>
                <th>TIPO</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, i) => (
                <tr key={i}>
                  <td>Documento {i + 1}</td>
                  <td>Nombre {i + 1}</td>
                  <td>Email {i + 1}</td>
                  <td>Teléfono {i + 1}</td>
                  <td>Dirección {i + 1}</td>
                  <td>Salarrio {i + 1}</td>
                  <td>Tipo - Cargo {i + 1}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Trabajadores;
