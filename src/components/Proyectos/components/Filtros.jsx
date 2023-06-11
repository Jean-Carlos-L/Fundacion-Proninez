import { Row, Col, Form } from "react-bootstrap";

export const Filtros = ({ props }) => {
  const { filtros, setFiltros } = props;

  const onChange = (e) => {
    const { name, value } = e.target;

    setFiltros({
      ...filtros,
      [name]: value,
    });
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Comunidad</Form.Label>
            <Form.Select
              size="sm"
              name="id"
              onChange={onChange}
              value={filtros.id}
            >
              <option value="">Comunidades...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Responsable</Form.Label>
            <Form.Select
              size="sm"
              name="documento"
              onChange={onChange}
              value={filtros.documento}
            >
              <option value="">Responsables...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Valoracion</Form.Label>
            <Form.Control
              type="number"
              size="sm"
              name="valoracion"
              onChange={onChange}
              value={filtros.valoracion}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};
