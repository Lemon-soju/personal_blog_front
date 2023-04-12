import React from "react";
import Post from "./Post";
import ToyProjectSlide from "./ToyProjectSlide";
import { Container } from "react-bootstrap";

// 로그인 후 화면
const Main = () => {
  return (
    <div className="main-body">
      <h1 style={{ textAlign: "center", marginTop: "15vh" }}>
        창규's 토이 프로젝트
      </h1>
      <Container>
        <ToyProjectSlide />
      </Container>
      <Post />
    </div>
  );
};

export default Main;
