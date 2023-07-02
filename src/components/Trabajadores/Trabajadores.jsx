import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Form,
  Table,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { BsTrash3Fill } from "react-icons/bs";
import { RegistrarTrabajador } from "./components/RegistrarTrabajador";
import { useTrabajadores } from "../../hooks/useTrabajadores";
import Swal from "sweetalert2";
import axios from "axios";
import { ActualizarSalario } from "./components/ActualizarSalario";

function Trabajadores() {
  const [refresh, setRefresh] = useState(false);
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

  let { trabajadores } = useTrabajadores(refresh, tipo);

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

  const deleteTrabajador = async (trabajador_id) => {
    try {
      const url = `${process.env.REACT_APP_URL}/fundacion_proninez/trabajadores/${trabajador_id}`;
      const { data } = await axios.patch(url);
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: data.msg,
      });

      setRefresh((prevRefresh) => !prevRefresh);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: error.message,
      });
    }
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
                <th>ACCIONES</th>
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
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <ActualizarSalario
                        documento={item.documento}
                        setRefresh={setRefresh}
                      />
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteTrabajador(item.documento)}
                      >
                        <BsTrash3Fill />
                      </Button>
                    </ButtonGroup>
                  </td>
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
