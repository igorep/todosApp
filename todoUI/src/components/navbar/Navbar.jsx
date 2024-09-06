import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navebar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="todos">My Small App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="todos">Todos</Nav.Link>
            <Nav.Link href="users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navebar;
