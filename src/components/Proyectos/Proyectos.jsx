import { useState } from "react";
import { Container, Row, Col, Badge, Spinner, Alert } from "react-bootstrap";
import { CardProyecto } from "./components/CardProyecto";
import { useProyectos } from "./hooks/useProyectos";
import { Filtros } from "./components/Filtros";

function Proyectos() {
  const [refresh, setRefresh] = useState(false);
  const [filtros, setFiltros] = useState({
    id: "",
    documento: "",
    valoracion: "",
    fecha_inicio: "",
    fecha_fin: "",
  });

  const { proyectos, isLoading, error } = useProyectos(refresh, filtros);

  if (isLoading) {
    return (
      <Container>
        <Row className="text-center mb-3">
          <h1>
            <Badge bg="dark">PROYECTOS</Badge>
          </h1>
        </Row>
        <Row>
          <Filtros props={{ filtros, setFiltros }} />
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
            <Badge bg="dark">PROYECTOS</Badge>
          </h1>
        </Row>
        <Row>
          <Filtros props={{ filtros, setFiltros }} />
        </Row>
        <Row className="justify-content-center">
          <Alert variant="danger" className="w-50 text-center text-uppercase">
            <Alert.Heading>Error al cargar los proyectos</Alert.Heading>
          </Alert>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="text-center mb-3">
        <h1>
          <Badge bg="dark">PROYECTOS</Badge>
        </h1>
      </Row>
      <Row>
        <Filtros props={{ filtros, setFiltros }} />
      </Row>
      <Row className="g-3 justify-content-center text-center mb-3">
        {proyectos.map((proyecto, i) => (
          <Col
            key={i}
            md={4}
            sm={6}
            xs={12}
            className="justify-content-center mb-3"
          >
            <CardProyecto proyecto={proyecto} setRefresh={setRefresh} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Proyectos;
