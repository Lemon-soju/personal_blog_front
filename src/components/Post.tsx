import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Paging from "./Paging";
import { homeAction } from "../redux/actions/homeAction";
import { RootState } from "../redux/reducers";
import {
  Button,
  Card,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); //현재페이지
  const [postPerPage] = useState(15); //페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<PostData[]>();
  const [search, setSearch] = useState("");

  interface PostData {
    postId: number;
    title: string;
    content: string;
    writer: string;
    createDate: string;
  }

  const setPage = (e: number) => {
    setCurrentPage(e);
  };

  const { postData } = useSelector((state: RootState) => state.home);

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

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search === null || search === "") {
      setCurrentPosts(postData.slice(indexOfFirstPost, indexOfLastPost));
    } else {
      const filterPosts = postData.filter((e: PostData) =>
        e.title.includes(search)
      );
      setCurrentPosts(filterPosts);
    }
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <Typography variant="h4" align="center" sx={{ mt: "3vh", mb: "3vh" }}>
        게시판
      </Typography>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Paper
          component="form"
          sx={{
            mr: "4vw",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
          onSubmit={onSearch}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="제목을 입력해주세요."
            onChange={onChangeSearch}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <img alt="search" className="post-search" src={"/search.png"} />
          </IconButton>
        </Paper>
      </div>
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
        <div className="write-button" style={{ marginBottom: "50px" }}>
          <Button variant="contained">
            {localStorage.getItem("uid") === null ? (
              <div
                onClick={() => {
                  window.alert("로그인 후 글쓰기가 가능합니다.");
                }}
              >
                글쓰기
              </div>
            ) : (
              <div onClick={goToCreatePost}>글쓰기</div>
            )}
          </Button>
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
    </Card>
  );
};

export default Post;
