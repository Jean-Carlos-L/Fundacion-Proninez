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
            Home
          </Link>
          <Link className="nav-link" to="infantes">
            Infantes
          </Link>
          <Link className="nav-link" to="objetivos">
            Objetivos
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
