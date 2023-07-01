import { ListGroup, Accordion } from "react-bootstrap";
import moment from "moment";

export const ListInfantes = ({ infantes }) => {
  return (
    <ListGroup>
      {infantes.map((infante, i) => (
        <ListGroup.Item key={i}>
          <Accordion>
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{infante.nombre_completo}</Accordion.Header>
              <Accordion.Body>
                <p>
                  <strong>Documento: </strong>
                  {infante.documento}
                </p>
                <p>
                  <strong>Fecha nacimiento: </strong>
                  {moment(infante.fecha_nacimiento).format("YYYY-MM-DD")}
                </p>
                <p>
                  <strong>Sexo: </strong>
                  {infante.sexo}
                </p>
                <p>
                  <strong>Madre: </strong>
                  {infante.madre}
                </p>
                <p>
                  <strong>Padre: </strong>
                  {infante.padre}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
