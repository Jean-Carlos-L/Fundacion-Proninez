import { Row, Col, Form, Button } from "react-bootstrap";
import { useComunidades } from "../../../hooks/useComunidades";
import RegistrarProyectos from "./RegistrarProyectos";
import { useState } from "react";
import { useResaponsables } from "../../../hooks/useResponsables";

export const Filtros = ({ props }) => {
  const { filtros, setFiltros } = props;

  const [show, setShow] = useState(false);
  const [newProyect, setNewProyect] = useState({
    titulo: "",
    descripcion: "",
    fecha_inicio: "",
    fecha_fin: "",
    alcance: "",
    presupuesto: "",
    tema_id: "",
    administrativo_id: "",
  });
  const { comunidades } = useComunidades();
  const { responsables } = useResaponsables();

  const onChange = (e) => {
    const { name, value } = e.target;

    setFiltros({
      ...filtros,
      [name]: value,
    });
  };

  const handleClose = () => {
    setShow(false);
    setNewProyect({
      titulo: "",
      descripcion: "",
      fecha_inicio: "",
      fecha_fin: "",
      alcance: "",
      presupuesto: "",
      tema_id: "",
      administrativo_id: "",
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
              {comunidades.map((comunidad) => (
                <option key={comunidad.id} value={comunidad.id}>
                  {comunidad.nombre}
                </option>
              ))}
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
              <option value="">Responsables</option>
              {responsables.map((item) => (
                <option key={item.documento} value={item.documento}>
                  {item.nombre_completo}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
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
        <Col className="align-items-end d-flex justify-content-end">
          <Button
            variant="dark"
            size="sm"
            className="mb-3"
            onClick={() => setShow(true)}
          >
            Agregar proyecto
          </Button>
          <RegistrarProyectos
            props={{ show, setShow, newProyect, setNewProyect, handleClose }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Fecha inicio</Form.Label>
            <Form.Control
              type="date"
              size="sm"
              name="fecha_inicio"
              onChange={onChange}
              value={filtros.fecha_inicio}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Fecha fin</Form.Label>
            <Form.Control
              type="date"
              size="sm"
              name="fecha_fin"
              onChange={onChange}
              value={filtros.fecha_fin}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};
