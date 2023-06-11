import { Button, Card } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

export const CardProyecto = ({ proyecto }) => {
  return (
    <Card className="shadow">
      <Card.Body
        style={{ background: "#6B728E" }}
        className="text-white rounded-3"
      >
        <Card.Title>{proyecto.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {proyecto.alcance}
        </Card.Subtitle>
        <Card.Text>{proyecto.descripcion}</Card.Text>
        <Button size="sm" variant="primary" className="fs-5">
          <AiFillEye />
        </Button>
      </Card.Body>
    </Card>
  );
};
