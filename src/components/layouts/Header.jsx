import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          Fundación Proniñez
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Proyectos
          </Link>
          <Link className="nav-link" to="objetivos">
            Objetivos
          </Link>
          <Link className="nav-link" to="trabajadores">
            Trabajadores
          </Link>
          <Link className="nav-link" to="comunidades">
            Comunidades
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
