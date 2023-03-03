import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NetflixNavigation from "../ToyProject/Netflix/NetflixNavigation";

const Navigation = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  if (window.location.pathname.startsWith("/netflix"))
    return <NetflixNavigation />;
  return (
    <div style={{ display: "flex" }}>
      <Navbar style={{ flexBasis: "100%" }} bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">창규's 블로그</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <div className="login-button" onClick={goToLogin}>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div style={{ marginRight: "3vh", whiteSpace: "nowrap" }}>로그인</div>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
