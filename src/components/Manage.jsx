import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paging from "./Paging";
import { homeAction } from "../redux/actions/homeAction";

const Manage = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); //현재페이지
  const [postPerPage] = useState(20); //페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);
  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = async (id) => {
    let checked = checkedInputs.includes(id) ? true : false;

    if (!checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  const setPage = (e) => {
    setCurrentPage(e);
  };

  const { postData } = useSelector((state) => state.home);

  useEffect(() => {
    if (postData.length === 0) {
      dispatch(homeAction.getPosts());
    } else {
      let myPostData = postData.filter((e) => e.writer === "admin");
      setCount(myPostData.length);
      setIndexOfLastPost(currentPage * postPerPage);
      setIndexOfFirstPost(indexOfLastPost - postPerPage);
      setCurrentPosts(myPostData.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [
    dispatch,
    currentPage,
    indexOfFirstPost,
    indexOfLastPost,
    postPerPage,
    postData,
  ]);

  return (
    <div className="main-body">
      <div className="post-body">
        <h2 style={{ textAlign: "center", marginTop: "50px" }}> 글 관리 </h2>
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
                <tr className="post-table-row" key={index}>
                  <td>{e.postId}</td>
                  <td>{e.title}</td>
                  <td>{e.createDate}</td>
                  <td>{e.writer}</td>
                  <td>
                    {" "}
                    <input
                      type={"checkbox"}
                      onChange={() => {
                        changeHandler(e.postId);
                      }}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>게시물이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
        <button onClick={()=> console.log("delete",checkedInputs)}>삭제</button>
        <Paging page={currentPage} count={count} setPage={setPage} />
      </div>
    </div>
  );
};

export default Manage;
