import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Paging from "./Paging";
import { homeAction } from "../redux/actions/homeAction";
import { RootState } from "../redux/reducers";
import {
  Box,
  Button,
  Card,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); //현재페이지
  const [postPerPage] = useState(10); //페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<PostData[]>();
  const [search, setSearch] = useState(String);

  interface PostData {
    postId: number;
    title: string;
    content: string;
    writer: string;
    createDate: string;
    imagePreview: string;
  }

  const setPage = (e: number) => {
    setCurrentPage(e);
  };

  const { postData } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(homeAction.getPosts());
  }, [dispatch]);

  useEffect(() => {
    setCount(postData.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(postData.slice(indexOfFirstPost, indexOfLastPost));
  }, [postData, currentPage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  const goToCreatePost = () => {
    navigate("/post/new");
  };

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(search);
    event.preventDefault();
    dispatch(homeAction.getPosts(search));
    setCount(postData.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(postData.slice(indexOfFirstPost, indexOfLastPost));
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

      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          margin: { xs: "3px", sm: "30px" },
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", sm: "25%", md: "25%", lg: "25%" },
            }}
            onSubmit={onSearch}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="제목을 입력해주세요."
              onChange={onChangeSearch}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>제목</TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                등록일
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                작성자
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts && currentPosts.length > 0 ? (
              currentPosts.map((e, index) => (
                <TableRow
                  key={index}
                  hover
                  onClick={() => navigate(`/post/${e.postId}`)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell>
                    {e.imagePreview ? (
                      <Card
                        sx={{
                          width: { xs: "7vh", sm: "10vh" },
                          height: { xs: "7vh", sm: "10vh" },
                        }}
                      >
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                          src={e.imagePreview}
                          alt=""
                        />
                      </Card>
                    ) : (
                      <Box sx={{ height: { xs: "7vh", sm: "10vh" } }} />
                    )}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "left",
                      width: { md: "50vw" },
                    }}
                  >
                    {e.title.slice(0, 26)}
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "left",
                      width: { md: "15vw" },
                      display: { xs: "none", sm: "table-cell" },
                    }}
                  >
                    {e.createDate.slice(0, 10)}
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                    {e.writer}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>게시물이 없습니다.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

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
            <SettingsOutlinedIcon
              fontSize="large"
              onClick={() => {
                navigate("/manage");
              }}
            />
          </div>
        </div>
      </Card>
    </Card>
  );
};

export default Post;
