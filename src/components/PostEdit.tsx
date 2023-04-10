import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { editPost } from "../controller/controller";

const PostEdit = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const editSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { id: params.id, title, content };
    let accessToken = localStorage.getItem("accessToken");
    let response = await editPost(data, accessToken);

    if (response.status === 200) {
      window.alert("글 수정 성공");
      navigate("/");
      return window.location.reload(); // 최신 글 바로 적용
    } else {
      window.alert("글 수정 실패");
      return window.location.reload();
    }
  };

  useEffect(() => {
    setTitle(location.state.title);
    setContent(location.state.content);
  }, [location.state.title, location.state.content]);

  return (
    <div className="main-body">
      <form onSubmit={(e) => editSubmit(e)}>
        <div className="post-create">
          <input
            className="post-create-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div style={{ marginTop: "2vh" }}>
            <textarea
              className="post-create-content"
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

export default PostEdit;
