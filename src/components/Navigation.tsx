import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NetflixNavigation from "../ToyProject/Netflix/NetflixNavigation";
import { Button } from "@mui/material";

const Navigation = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const goToLogout = () => {
    window.localStorage.removeItem("uid");
    window.localStorage.removeItem("accessToken");
    window.alert("로그아웃 성공");
    navigate("/");
  };

  if (window.location.pathname.startsWith("/netflix"))
    return <NetflixNavigation />;
  return (
    <div style={{ display: "flex" }}>
      <Navbar style={{ flexBasis: "100%" }} bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ marginLeft: "2vw" }}>
            창규's 블로그
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="nav-link-container">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="https://lemon-soju.tistory.com/">
                  티스토리 블로그
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="login-button">
          <div style={{ marginRight: "3vh", whiteSpace: "nowrap" }}>
            {localStorage.getItem("uid") === null ? (
              <>
                <span style={{ marginRight: "3px" }}>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span onClick={goToLogin}>로그인</span>
              </>
            ) : (
              <>
                <span>{localStorage.getItem("uid")}님</span>
                <Button
                  variant="outlined"
                  onClick={goToLogout}
                  sx={{ marginLeft: "10px" }}
                >
                  로그아웃
                </Button>
              </>
            )}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
