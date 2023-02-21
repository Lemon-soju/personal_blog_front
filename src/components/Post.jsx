import React, { useEffect, useState } from "react";
import { getPosts } from "../controller/controller";

const Post = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let accessToken = localStorage.getItem("accessToken");
    const res = await getPosts(accessToken);

    const initData = res.data.slice(0, 20).map((e) => {
      return {
        id: e.postId,
        title: e.title,
        content: e.content,
      };
    });

    setData(initData);
    console.log("게시글 목록 불러오기 성공");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>게시글 목록</div>
      <div>
        {data.map((e) => {
          return <div>제목: {e.title}</div>;
        })}
      </div>
    </>
  );
};

export default Post;
