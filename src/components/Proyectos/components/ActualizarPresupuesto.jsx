import axios from "axios";
import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { AiTwotoneEdit } from "react-icons/ai";
import Swal from "sweetalert2";

export const ActualizarPresupuesto = ({ setRefresh, proyecto_id }) => {
  const [show, setShow] = useState(false);
  const [newPresupuesto, setNewPresupuesto] = useState(0);

  const handleClose = () => {
    setShow(false);
    setNewPresupuesto(0);
  };

  const actualizarPresupuesto = async (proyecto_id) => {
    try {
      const url = `${process.env.REACT_APP_URL}/fundacion_proninez/proyectos`;
      const { data } = await axios.patch(url, {
        id: proyecto_id,
        presupuesto: newPresupuesto,
      });

      Swal.fire({
        icon: "success",
        title: "Exito",
        text: data.msg,
      });

      setRefresh((preveRefresh) => !preveRefresh);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: error.message,
      });
    }
  };

  return (
    <>
      <Button
        size="sm"
        variant="secondary"
        className="fs-5 me-1"
        onClick={() => setShow(true)}
      >
        <AiTwotoneEdit />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar presupuesto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <FloatingLabel
            controlId="floatingTextarea"
            label="Nuevo presupuesto"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Nuevo presupuesto"
              value={newPresupuesto}
              onChange={(e) => setNewPresupuesto(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => actualizarPresupuesto(proyecto_id)}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
