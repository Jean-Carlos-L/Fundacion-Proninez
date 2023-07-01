import {
  Container,
  Row,
  Col,
  Spinner,
  Badge,
  Alert,
  Button,
} from "react-bootstrap";
import { useComunidades } from "../../hooks/useComunidades";
import { CardComunidad } from "./components/CardComunidad";
import { useState } from "react";
import { RegistrarComunidad } from "./components/RegistrarComunidad";

function Comunidades() {
  const [show, setShow] = useState(false);
  const [newComunidad, setNewComunidad] = useState({
    nombre: "",
    etnia: "",
  });
  const { comunidades, isLoading, error } = useComunidades(show);

  const handleClose = () => {
    setShow(false);
    setNewComunidad({ nombre: "", etnia: "" });
  };

  if (isLoading) {
    return (
      <Container>
        <Row className="text-center mb-3">
          <h1>
            <Badge bg="dark">COMUNDIADES</Badge>
          </h1>
        </Row>

        <Row className="justify-content-center">
          <Spinner animation="grow" />
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Row className="text-center mb-3">
          <h1>
            <Badge bg="dark">COMUNDIADES</Badge>
          </h1>
        </Row>

        <Row className="justify-content-center">
          <Alert variant="danger" className="w-50 text-center text-uppercase">
            <Alert.Heading>Error al cargar los COMUNDIADES</Alert.Heading>
          </Alert>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="text-center mb-3">
        <h1>
          <Badge bg="dark">COMUNDIADES</Badge>
        </h1>
      </Row>
      <Row className="mb-3 justify-content-end">
        <Col xs="auto">
          <Button variant="dark" size="sm" onClick={() => setShow(true)}>
            Agregar comunidad
          </Button>
          <RegistrarComunidad
            props={{ show, handleClose, newComunidad, setNewComunidad }}
          />
        </Col>
      </Row>
      <Row className="g-3 justify-content-center text-center mb-3">
        {comunidades.map((comunidad, i) => (
          <Col
            key={i}
            md={4}
            sm={6}
            xs={12}
            className="justify-content-center mb-3"
          >
            <CardComunidad comunidad={comunidad} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Comunidades;
