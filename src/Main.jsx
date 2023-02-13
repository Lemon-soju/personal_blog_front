import React from "react";
import { Link } from "react-router-dom";

// 로그인 후 화면
const Main = () => {
  return (
    <>
      <div>Main</div>
      <Link to="/write">글 작성</Link> <br />
    </>
  );
};

export default Main;
