import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  

  return (
    <div style={{ marginBottom: '60px' }}    >

      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light shadow"
        bg="light"
        fixed="top"
      // sticky='top'

      >
        <Container
        >
          <Navbar.Brand>
            <h3 className="fs-4 fw-bold header-text text-uppercase">
              Travel_SQUARE
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/home"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Home
              </Link>


              <Link
                to="/myorders"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                My Orders
              </Link>

              <Link
                to="/manageorders"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Manage all Orders
              </Link>

              <Link
                to="/addservices"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Add Services
              </Link>

              <Link
                to="/about"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                About
              </Link>
              <Link
                to="/login"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Login
              </Link>
             

             


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;