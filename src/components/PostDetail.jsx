import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readPost } from "../controller/controller";

const PostDetail = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
    </div>
  );
};

export default PostDetail;
