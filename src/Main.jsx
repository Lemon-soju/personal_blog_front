import React from "react";
import { useNavigate } from "react-router-dom";
import Post from "./components/Post";

// 로그인 후 화면
const Main = () => {
  const navigate = useNavigate();
  const goToCreatePost = () => {
    navigate("/post/new");
  };

  return (
    <>
      <div>Main</div>
      <div onClick={goToCreatePost}>
        <div>글쓰기</div>
      </div>
      <Post />
    </>
  );
};

export default Main;
