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
        writer: e.writer,
        createDate: e.createDate.substr(0, 10),
      };
    });

    setData(initData);
    // console.log("게시글 목록 불러오기 성공", initData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}> 게시판 </h2>
      <table className="post-table">
        <thead className="post-table-header">
          <tr>
            <th>글 번호</th>
            <th>제목</th>
            <th>등록일</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody className="post-table-column">
          {data.map((e) => {
            return (
              <tr className="post-table-row" key={e.id}>
                <td> {e.id}</td>
                <td> {e.title}</td>
                <td> {e.createDate}</td>
                <td> {e.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Post;
