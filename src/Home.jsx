import React from "react";
import { Link } from "react-router-dom";

// 로그인 전 화면
const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/signup">회원가입</Link> <br />
      <Link to="/login">로그인</Link> <br />
    </>
  );
};

export default Home;
