import { Form } from "react-bootstrap";
import { useProyectos } from "../../../hooks/useProyectos";

export const Buscador = ({ setObjetivo }) => {
  const { proyectos } = useProyectos(false, {
    id: "",
    documento: "",
    valoracion: "",
    fecha_inicio: "",
    fecha_fin: "",
  });

  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(e) => setObjetivo(e.target.value)}
    >
      <option>Selecciona...</option>
      {proyectos.map((item, i) => (
        <option key={i} value={item.id}>
          {item.titulo}
        </option>
      ))}
    </Form.Select>
  );
};
