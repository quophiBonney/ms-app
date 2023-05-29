import React from "react";
import {useLocation, Link} from "react-router-dom";
import NavCSS from "./Components.module.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {HiMenuAlt3, HiUser} from "react-icons/hi";
function Navigation() {
  const location = useLocation();
  if (location.pathname === "/auth/login") {
    return null; // Return nothing to hide the navbar
  } else if (location.pathname === "/auth/signup") {
    return null;
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top"
      id={NavCSS.navbar}
    >
      <Container>
        <Navbar.Brand href="#home">
          <h4>Hi</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <HiMenuAlt3 className={NavCSS.toggleIcon} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <div className={NavCSS.btnGroup}>
              <Nav.Link>
                <Link to="auth/login" className="btn" id={NavCSS.btnSearch}>
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="auth/signup" className="btn" id={NavCSS.registerBtn}>
                  <HiUser /> Your Account
                </Link>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
