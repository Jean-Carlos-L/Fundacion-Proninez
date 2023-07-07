import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { ActualizarPresupuesto } from "./ActualizarPresupuesto";
import TrabajadoresProyecto from "./TrabajadoresProyecto";
import { useState } from "react";

export const CardProyecto = ({ proyecto, setRefresh }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const deleteProyecto = async (proyecto_id) => {
    try {
      const url = `${process.env.REACT_APP_URL}/fundacion_proninez/proyectos/${proyecto_id}`;
      const { data } = await axios.patch(url);
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: data.msg,
      });

      setRefresh((prevRefresh) => !prevRefresh);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: error.message,
      });
    }
  };

  return (
    <Card className="shadow" style={{ minHeight: "300px" }}>
      <Card.Body style={{ background: "#E3F4F4" }} className="rounded-3">
        <Card.Title>{proyecto.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {proyecto.alcance} - {proyecto.presupuesto}
        </Card.Subtitle>
        <Card.Text>{proyecto.descripcion}</Card.Text>
        <Button
          size="sm"
          variant="primary"
          className="fs-5 me-1"
          onClick={() => setShow(true)}
        >
          <AiFillEye />
        </Button>
        <TrabajadoresProyecto
          responsable={proyecto.responsable}
          profesionales={proyecto.profesionales}
          handleClose={handleClose}
          show={show}
        />
        <Button
          size="sm"
          variant="danger"
          className="fs-5 me-1"
          onClick={() => deleteProyecto(proyecto.id)}
        >
          <BsTrash3Fill />
        </Button>
        <ActualizarPresupuesto
          setRefresh={setRefresh}
          proyecto_id={proyecto.id}
        />
      </Card.Body>
    </Card>
  );
};
