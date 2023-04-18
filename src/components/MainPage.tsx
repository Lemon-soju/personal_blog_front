import React from "react";
import Post from "./Post";
import ToyProjectSlide from "./ToyProjectSlide";
import { Container } from "react-bootstrap";

// 로그인 후 화면
const Main = () => {
  return (
    <div className="main-body">
      <Container style={{ marginTop: "5vh" }}>
        <ToyProjectSlide />
      </Container>
      <Container style={{ marginTop: "5vh" }}>
        <Post />
      </Container>
    </div>
  );
};

export default Main;
