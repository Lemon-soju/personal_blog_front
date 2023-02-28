import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../controller/controller";
import Paging from "./Paging";

const Post = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); //현재페이지
  const [postPerPage] = useState(20); //페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);

  const setPage = (e) => {
    setCurrentPage(e);
  };

  const getData = async () => {
    let accessToken = localStorage.getItem("accessToken");
    const res = await getPosts(accessToken);

    const initData = res.data.map((e) => {
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
    setCount(data.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(data.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, indexOfFirstPost, indexOfLastPost, data, postPerPage]);

  const goToCreatePost = () => {
    navigate("/post/new");
  };

  return (
    <div className="post-body">
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
          {currentPosts && currentPosts.length > 0 ? (
            currentPosts.map((e) => (
              <tr className="post-table-row" key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.createDate}</td>
                <td>{e.writer}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>게시물이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>

      <Paging page={currentPage} count={count} setPage={setPage} />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          className="write-button"
          style={{ marginBottom: "50px" }}
          onClick={goToCreatePost}
        >
          <button>글쓰기</button>
        </div>
        <div className="manage-button" style={{ marginBottom: "50px" }}>
          <button>관리</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
