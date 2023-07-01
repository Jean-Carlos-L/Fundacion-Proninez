import { Button, Card, ListGroup } from "react-bootstrap";
import { BsTrash3Fill } from "react-icons/bs";
import { ModalListInfantes } from "./ModalListInfantes";

export const CardComunidad = ({ comunidad }) => {
  const { infantes } = comunidad;

  return (
    <Card className="shadow">
      <Card.Body
        style={{ background: "#6B728E" }}
        className="text-white rounded-3"
      >
        <Card.Title>{comunidad.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {comunidad.etnia}
        </Card.Subtitle>
        <ListGroup
          horizontal="xl"
          className="my-2 p-0 justify-content-center"
          style={{ fontSize: "13px" }}
        >
          <ListGroup.Item>{comunidad.documento || "NA"}</ListGroup.Item>
          <ListGroup.Item>{comunidad.nombre_completo || "NA"}</ListGroup.Item>
          <ListGroup.Item>{comunidad.telefono || "NA"}</ListGroup.Item>
        </ListGroup>
        <Card.Text>
          <ModalListInfantes infantes={infantes} />
        </Card.Text>
        <Button size="sm" variant="danger" className="fs-5 me-1">
          <BsTrash3Fill />
        </Button>
      </Card.Body>
    </Card>
  );
};
