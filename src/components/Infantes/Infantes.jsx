import { useState } from "react";
import { Container, Row, Col, Badge, Table, Form } from "react-bootstrap";
import { useInfantes } from "../../hooks/useInfantes";

function Infantes() {
  const refresh = false;
  const [filtros, setFiltros] = useState({
    sexo: true,
    proyecto: true,
    comunidad: true,
  });

  let { infantes } = useInfantes(refresh, filtros);

  return (
    <Container>
      <Row className="mb-3 text-center">
        <h1>
          <Badge bg="dark">INFANTES</Badge>
        </h1>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Form>
          <Form.Check
            inline
            label="Sexo"
            name="sexo"
            type="checkbox"
            checked={filtros.sexo}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                [e.target.name]: e.target.checked,
              })
            }
          />
          <Form.Check
            inline
            label="Comunidad"
            name="comunidad"
            type="checkbox"
            checked={filtros.comunidad}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                [e.target.name]: e.target.checked,
              })
            }
          />
          <Form.Check
            inline
            label="Proyectos"
            name="proyecto"
            type="checkbox"
            checked={filtros.proyecto}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                [e.target.name]: e.target.checked,
              })
            }
          />
        </Form>
      </Row>
      <Row>
        <Col>
          <Table className="text-center" responsive bordered striped>
            <thead>
              <tr>
                <th>EDAD PROMEDIO</th>
                <th>SEXO</th>
                <th>COMUINIDAD</th>
                <th>PROYECTO</th>
              </tr>
            </thead>
            <tbody>
              {infantes.map((item, i) => (
                <tr key={i}>
                  <td>{item.edad_promedio}</td>
                  <td>{item.sexo}</td>
                  <td>{item.comunidad}</td>
                  <td>{item.proyecto}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Infantes;
