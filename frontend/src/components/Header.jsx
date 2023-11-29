import { Navbar, Nav, Container } from "react-bootstrap";
import { useContext } from "react";
import { FaShoppingCart, FaUser, FaListUl, FaUserEdit } from "react-icons/fa";

import logo from "../styles/logo-small.png";
import { LinkContainer } from "react-router-bootstrap";
// to use LinkContainer to='/' is similar to the Link from react-router-dom but this is for BOOTSTRAP href=''
import { CurrentUser } from "../contexts/CurrentUser";
function Header() {
  const { currentUser, logout } = useContext(CurrentUser);
  let loginActions = (
    <LinkContainer to="/login">
      <Nav.Link>
        <FaUser />
        &nbsp;Login
      </Nav.Link>
    </LinkContainer>
  );
  if (currentUser) {
    loginActions = (
      <>
        <LinkContainer to="/cart">
          <Nav.Link>
            <FaShoppingCart />
            &nbsp;Cart
          </Nav.Link>
        </LinkContainer>
        {currentUser.isAdmin ? (
          <LinkContainer to="/admin">
            <Nav.Link>
              <FaUserEdit />
              &nbsp;Admin:{currentUser.name}
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Navbar.Text>
            <FaUser />
            &nbsp;Hello:{currentUser.name}
          </Navbar.Text>
        )}
        <LinkContainer to="/" onClick={logout}>
          <Nav.Link>&nbsp;Logout</Nav.Link>
        </LinkContainer>
      </>
    );
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
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
            <Nav className="ms-auto ">
              <LinkContainer to="/products">
                <Nav.Link>
                  <FaListUl />
                  &nbsp;Products
                </Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to="/admin">
                <Nav.Link>
                  <FaUserEdit />
                  &nbsp;Admin
                </Nav.Link>
              </LinkContainer> */}

              {loginActions}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
