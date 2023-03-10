import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Paging from "./Paging";
import { homeAction } from "../redux/actions/homeAction";
import { deletePosts } from "../controller/controller";

const Manage = () => {
  const navigate = useNavigate();
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

  const deleteSubmit = async (e) => {
    let accessToken = localStorage.getItem("accessToken");
    const data = { checkedInputs };
    let response = await deletePosts(data, accessToken);

    if (response.status === 200) {
      window.alert("글삭제 성공");
      return window.location.reload();
    } else {
      window.alert("글삭제 실패");
      return window.location.reload();
    }
  };

  const { postData } = useSelector((state) => state.home);

  useEffect(() => {
    if (postData.length === 0) {
      dispatch(homeAction.getPosts());
    } else {
      let uid = localStorage.getItem("uid");
      let myPostData = postData.filter((e) => e.writer === uid);
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
        <h2 style={{ textAlign: "center", marginTop: "50px" }}> 내가 쓴 글 </h2>
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
                  <td style={{ width: "13vw" }}>{e.postId}</td>
                  <td
                    style={{ textAlign: "left" }}
                    onClick={() => navigate(`/mypost/${e.postId}`)}
                  >
                    {e.title}
                  </td>
                  <td style={{ width: "10vw" }}>{e.createDate.slice(0, 10)}</td>
                  <td style={{ width: "10vw" }}>{e.writer}</td>
                  <td>
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "12vw",
            marginTop: "4vh",
          }}
        >
          <button onClick={() => deleteSubmit(checkedInputs)}>삭제</button>
        </div>

        <Paging page={currentPage} count={count} setPage={setPage} />
      </div>
    </div>
  );
};

export default Manage;
