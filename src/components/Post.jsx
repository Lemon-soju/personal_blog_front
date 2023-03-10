import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Paging from "./Paging";
import { homeAction } from "../redux/actions/homeAction";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); //현재페이지
  const [postPerPage] = useState(20); //페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);

  const setPage = (e) => {
    setCurrentPage(e);
  };

  const { postData } = useSelector((state) => state.home);

  useEffect(() => {
    if (postData.length === 0) {
      dispatch(homeAction.getPosts());
    } else {
      setCount(postData.length);
      setIndexOfLastPost(currentPage * postPerPage);
      setIndexOfFirstPost(indexOfLastPost - postPerPage);
      setCurrentPosts(postData.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [
    dispatch,
    currentPage,
    indexOfFirstPost,
    indexOfLastPost,
    postPerPage,
    postData,
  ]);

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
            currentPosts.map((e, index) => (
              <tr
                className="post-table-row"
                key={index}
                onClick={() => navigate(`/post/${e.postId}`)}
              >
                <td className="post-number">{e.postId}</td>
                <td style={{ textAlign: "left", width: "40vw" }}>
                  {e.title.slice(0, 26)}
                </td>
                <td className="post-date">{e.createDate.slice(0, 10)}</td>
                <td className="post-writer">{e.writer}</td>
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
        <div
          className="manage-button"
          style={{ marginBottom: "50px", marginLeft: "10px" }}
        >
          <img
            width="30"
            alt="manage"
            src={"/manage.png"}
            onClick={() => {
              navigate("/manage");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
