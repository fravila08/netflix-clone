import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/films/"}>RunnerTV</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/filter/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/filter/tv">TV</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;