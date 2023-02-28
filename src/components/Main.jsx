import React from "react";
import Post from "./Post";
import ToyProjectSlide from "./ToyProjectSlide";

// 로그인 후 화면
const Main = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "15vh" }}>
        창규's 토이 프로젝트
      </h1>
      <ToyProjectSlide />
      <Post />
    </div>
  );
};

export default Main;
