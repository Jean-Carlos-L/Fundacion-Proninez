import { Modal, Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import Swal from "sweetalert2";
import { useResaponsables } from "../../../hooks/useResponsables";
import { useTemas } from "../../../hooks/useTemas";
import axios from "axios";

function RegistrarProyectos({ props }) {
  const { show, newProyect, setNewProyect, handleClose } = props;
  const { responsables } = useResaponsables();
  const { temas } = useTemas();

  const handleFields = (e) => {
    const { name, value } = e.target;
    setNewProyect({
      ...newProyect,
      [name]: value,
    });
  };

  const onRegistrar = async (e) => {
    try {
      e.preventDefault();
      let validated = true;
      for (let key in newProyect) {
        if (newProyect[key] === "") {
          validated = false;
          break;
        }
      }

      if (validated) {
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/proyectos`;
        const { data } = await axios.post(url, newProyect);

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

        Swal.fire({
          icon: "success",
          title: "Exitoso",
          text: data.msg,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ooopss...",
          text: "Todos los campos son obligatorios",
        });
      }
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Ooopss...",
        text: e.getMessage,
      });
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Agregar nuevo proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <FloatingLabel label="Título" className="mb-3">
                <Form.Control
                  placeholder="Título"
                  name="titulo"
                  value={newProyect.titulo}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Descripción" className="mb-3">
                <Form.Control
                  placeholder="Descripción"
                  name="descripcion"
                  value={newProyect.descripcion}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Fecha inicio" className="mb-3">
                <Form.Control
                  placeholder="Fecha inicio"
                  type="date"
                  name="fecha_inicio"
                  value={newProyect.fecha_inicio}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Fecha fin" className="mb-3">
                <Form.Control
                  placeholder="Fecha fin"
                  type="date"
                  name="fecha_fin"
                  value={newProyect.fecha_fin}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Alcance" className="mb-3">
                <Form.Control
                  placeholder="Alcance"
                  name="alcance"
                  value={newProyect.alcance}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Presupuesto" className="mb-3">
                <Form.Control
                  placeholder="Presupuesto"
                  type="number"
                  name="presupuesto"
                  value={newProyect.presupuesto}
                  onChange={handleFields}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel label="Tema" className="mb-3">
                <Form.Select
                  aria-label="Floating label select example"
                  name="tema_id"
                  value={newProyect.tema_id}
                  onChange={handleFields}
                >
                  <option value="">Tema</option>
                  {temas.map((item, i) => (
                    <option key={item.id} value={item.id}>
                      {item.descripcion}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Responsable" className="mb-3">
                <Form.Select
                  aria-label="Floating label select example"
                  name="administrativo_id"
                  value={newProyect.administrativo_id}
                  onChange={handleFields}
                >
                  <option value="">Responsable</option>
                  {responsables.map((item) => (
                    <option key={item.documento} value={item.documento}>
                      {item.nombre_completo}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="dark" onClick={onRegistrar}>
          Registrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegistrarProyectos;
