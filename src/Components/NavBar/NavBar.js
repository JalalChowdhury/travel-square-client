import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import useAuth from './../../Hook/useAuth';

const NavBar = () => {

  const { user, logout } = useAuth();

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

              {
                user?.email && <Link to="/myorders" className="text-decoration-none fs-5 me-3 header-text fw-bold"
                >
                  My Orders
                </Link>

              }

              <Link
                to="/manageorders"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                ManageOrders
              </Link>

              <Link
                to="/addservices"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Add Service
              </Link>

              <Link
                to="/about"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                About
              </Link>

              <span className="fw-bold pt-2 px-2">{user?.displayName} </span>
              {
                user?.email ?

                  <Button onClick={logout} className="text-decoration-none fs-5 me-3 header-text fw-bold">Log Out</Button>
                  :
                  <Link
                    to="/login"
                    className="text-decoration-none fs-5 me-3 header-text fw-bold"
                  >
                    Login
                  </Link>
              }





            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;