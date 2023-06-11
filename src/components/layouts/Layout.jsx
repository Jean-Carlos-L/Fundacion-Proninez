import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="bg-dark bg-opacity-75 d-flex vh-100 flex-column ">
      <Header />
      <div className="h-100 bg-body-tertiary m-3 overflow-y-auto scrollbar rounded-start shadow">
        <Container fluid className="h-100">
          <Outlet />
        </Container>
      </div>
    </div>
  );
}

export default Layout;
