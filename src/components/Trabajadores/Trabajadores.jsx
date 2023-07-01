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
import { useTrabajadores } from "../../hooks/useTrabajadores";

function Trabajadores() {
  const [tipo, setTipo] = useState("false");
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({
    documento: "",
    nombre_completo: "",
    telefono: "",
    email: "",
    salario: 0,
    fecha_nacimiento: "",
    direccion: "",
    cargo_especialidad: "",
    tipo: "",
  });

  const { trabajadores } = useTrabajadores(tipo);

  const handleClose = () => {
    setNewUser({
      documento: "",
      nombre_completo: "",
      telefono: "",
      email: "",
      salario: 0,
      fecha_nacimiento: "",
      direccion: "",
      cargo_especialidad: "",
      tipo: "",
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
              <Form.Select
                aria-label="Default select example"
                size="sm"
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="false">Tipo trabajador</option>
                <option value="administrativo">Administrativo</option>
                <option value="profesional">Profesional</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
        <Col className="text-end">
          <Button variant="dark" size="sm" onClick={() => setShow(true)}>
            Registrar nuevo
          </Button>
          <RegistrarTrabajador
            props={{ show, handleClose, newUser, setNewUser, setTipo }}
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
              {trabajadores.map((item, i) => (
                <tr key={i}>
                  <td>{item.documento}</td>
                  <td>{item.nombre_completo}</td>
                  <td>{item.email}</td>
                  <td>{item.telefono}</td>
                  <td>{item.direccion}</td>
                  <td>{item.salario}</td>
                  <td>{item.cargo || item.especialidad}</td>
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
