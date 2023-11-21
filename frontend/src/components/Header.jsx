import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../styles/logo-small.png";
import { LinkContainer } from "react-router-bootstrap";
// to use LinkContainer to='/' is similar to the Link from react-router-dom but this is for BOOTSTRAP href=''

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            {/* navbar brand sets the brand to left side  */}
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" width="50px" />
              The Tropical Collection
            </Navbar.Brand>
          </LinkContainer>
          {/* navbar toggle works together with the navbar collapse */}
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            {/* ms-auto shifts the items to the right rather than left*/}
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart />
                  &nbsp;Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser />
                  &nbsp;Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
