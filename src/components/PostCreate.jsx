import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { writePost } from "../controller/controller";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const postSubmit = async (e) => {
    e.preventDefault();
    const data = { title, content };
    let accessToken = localStorage.getItem("accessToken");
    let response = await writePost(data, accessToken);

    if (response.status === 200) {
      window.alert("글쓰기 성공");
      return navigate("/");
    } else {
      window.alert("글쓰기 실패");
      return window.location.reload();
    }
  };

  return (
    <div className="main-body">
      <form onSubmit={(e) => postSubmit(e)}>
        <div className="form">
          <div>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div
            id="content"
            className="mt-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          >
            <textarea rows="15"></textarea>
          </div>

          <div className="mt-2">
            <button>글 작성완료</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
