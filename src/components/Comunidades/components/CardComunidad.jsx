import { Button, Card, ListGroup } from "react-bootstrap";
import { BsTrash3Fill } from "react-icons/bs";
import { ModalListInfantes } from "./ModalListInfantes";
import Swal from "sweetalert2";
import axios from "axios";

export const CardComunidad = ({ comunidad, setRefresh }) => {
  const { infantes } = comunidad;

  const deleteComunidad = async (comunidad_id) => {
    try {
      const url = `${process.env.REACT_APP_URL}/fundacion_proninez/comunidades/${comunidad_id}`;
      const { data } = await axios.patch(url);

      Swal.fire({
        icon: "success",
        title: "Exito",
        text: data.msg,
      });

      setRefresh((prevRefresh) => !prevRefresh);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: error.message,
      });
    }
  };

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
        <Button
          size="sm"
          variant="danger"
          className="fs-5 me-1"
          onClick={() => deleteComunidad(comunidad.id)}
        >
          <BsTrash3Fill />
        </Button>
      </Card.Body>
    </Card>
  );
};
