import React from "react";
import { Container, Row, Col, Badge, ListGroup } from "react-bootstrap";
import Grafica from "./components/Grafica";
import { Buscador } from "./components/Buscador";

function Objetivos() {
  const objetivos = [
    { objetivo: "Hola", cumplimiento: 100 },
    { objetivo: "Hola 1", cumplimiento: 50 },
    { objetivo: "Hola 2", cumplimiento: 10 },
    { objetivo: "Hola 4", cumplimiento: 20 },
  ];

  return (
    <Container>
      <Row className="mb-3 text-center">
        <h1>
          <Badge bg="dark">OBJETIVOS</Badge>
        </h1>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={6}>
          <Buscador />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <ListGroup variant="flush">
            {objetivos.map((item, i) => (
              <ListGroup.Item key={i}>
                {item.objetivo} - {item.cumplimiento}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <Grafica datos={objetivos} />
        </Col>
      </Row>
    </Container>
  );
}

export default Objetivos;
