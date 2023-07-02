import axios from "axios";
import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { AiTwotoneEdit } from "react-icons/ai";
import Swal from "sweetalert2";

export const ActualizarSalario = ({ setRefresh, documento }) => {
  const [show, setShow] = useState(false);
  const [newSalario, setNewSalario] = useState(0);

  const handleClose = () => {
    setShow(false);
    setNewSalario(0);
  };

  const actualizarPresupuesto = async (documento) => {
    try {
      const url = `${process.env.REACT_APP_URL}/fundacion_proninez/trabajadores`;
      const { data } = await axios.patch(url, {
        documento: documento,
        salario: newSalario,
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
          <Modal.Title>Editar salario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <FloatingLabel
            controlId="floatingTextarea"
            label="Nuevo salario"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="Nuevo salario"
              value={newSalario}
              onChange={(e) => setNewSalario(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => actualizarPresupuesto(documento)}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
