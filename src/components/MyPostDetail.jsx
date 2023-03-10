import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readPost } from "../controller/controller";
import { useNavigate } from "react-router-dom";

const MyPostDetail = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const getPost = useCallback(async () => {
    let post = await readPost(params.id);
    setTitle(post.data.title);
    setContent(post.data.content);
  }, [params.id]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <div className="post-title-background">
        <div className="post-title">{title}</div>
      </div>
      <div className="post-content">{content}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "20%",
          marginTop: "8vh",
        }}
      >
        <button
          onClick={(e) =>
            navigate(`/post/edit/${params.id}`, {
              state: {
                title: title,
                content: content,
              },
            })
          }
        >
          수정
        </button>
      </div>
    </div>
  );
};

export default MyPostDetail;
