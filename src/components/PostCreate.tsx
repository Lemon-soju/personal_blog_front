import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { writePost } from "../controller/controller";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const postSubmit = async (
    e: React.ChangeEvent<HTMLTextAreaElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const data = { title, content };
    let accessToken = localStorage.getItem("accessToken");
    let response = await writePost(data, accessToken);

    if (response.status === 200) {
      window.alert("글쓰기 성공");
      navigate("/");
      return window.location.reload(); // 최신 글 바로 적용
    } else {
      window.alert("글쓰기 실패");
      return window.location.reload();
    }
  };

  return (
    <div className="main-body">
      <form onSubmit={(e) => postSubmit(e)}>
        <div className="post-create">
          <input
            className="post-create-title"
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div style={{ marginTop: "2vh" }}>
            <textarea
              className="post-create-content"
              placeholder="내용을 입력해주세요."
              value={content}
              rows={15}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "26%",
            }}
          >
            <button>완료</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
