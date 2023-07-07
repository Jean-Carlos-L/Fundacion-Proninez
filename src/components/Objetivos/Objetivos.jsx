import React, { useState } from "react";
import { Container, Row, Col, Badge, ListGroup, Button } from "react-bootstrap";
import Grafica from "./components/Grafica";
import { Buscador } from "./components/Buscador";
import Swal from "sweetalert2";
import axios from "axios";

function Objetivos() {
  const [objetivos, setObjetivos] = useState([]);
  const [objetivo, setObjetivo] = useState("");

  const queryObjetivos = async () => {
    try {
      if (objetivo === "") {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Selecciona un proyecto",
        });
      } else {
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/objetivos/${objetivo}`;
        const { data } = await axios.get(url);
        setObjetivos(data);
      }
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
          <Badge bg="dark">OBJETIVOS</Badge>
        </h1>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={6}>
          <Buscador setObjetivo={setObjetivo} />
        </Col>
        <Col>
          <Button variant="primary" size="sm" onClick={queryObjetivos}>
            Buscar
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <ListGroup variant="flush">
            {objetivos.map((item, i) => (
              <ListGroup.Item key={i}>
                {item.nombreObjetivo} - {item.valoracionObjetivo}
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
