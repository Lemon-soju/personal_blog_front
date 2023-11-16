import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paging from "./Paging";
import { deletePosts, readAllPostsManage } from "../controller/controller";
import {
  Box,
  Button,
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Manage = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1); //현재페이지
  const [postPerPage] = useState(20); //페이지당 아이템 개수
  const [currentPosts, setCurrentPosts] = useState<any[]>([]);
  const [checkedInputs, setCheckedInputs] = useState<number[]>([]);
  const [totalItemsCount, setTotalItemsCount] = useState(0);

  const changeHandler = async (id: number) => {
    let checked = checkedInputs.includes(id) ? true : false;

    if (!checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  const setPage = (e: number) => {
    setCurrentPage(e);
  };

  const deleteSubmit = async (checkedInputs: number[]) => {
    const data = { checkedInputs };
    let accessToken = localStorage.getItem("accessToken");
    let response = await deletePosts(data, accessToken);

    if (response.status === 200) {
      window.alert("글삭제 성공");
      getPostsManage();
      return window.location.reload();
    } else {
      window.alert("글삭제 실패");
      return window.location.reload();
    }
  };

  const getPostsManage = async (search?: string | null) => {
    let accessToken = localStorage.getItem("accessToken");
    const response = await readAllPostsManage(
      currentPage,
      postPerPage,
      accessToken,
      search
    );
    setCurrentPosts(response.data.posts);
    setTotalItemsCount(response.data.totalItemsCount);
  };

  useEffect(() => {
    getPostsManage();
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <Box
      sx={{
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/background.jpg)",
          opacity: 0.6,
          zIndex: -1,
          backgroundSize: "cover",
        },
        paddingTop: "30px",
      }}
    >
      <Container>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <h2 style={{ textAlign: "center", marginTop: "150px" }}>
            내가 쓴 글
          </h2>

          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0)",
              margin: "30px",
            }}
          >
            {" "}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      display: { xs: "none", sm: "none", md: "table-cell" },
                    }}
                  >
                    글 번호
                  </TableCell>
                  <TableCell>제목</TableCell>
                  <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                    등록일
                  </TableCell>
                  <TableCell>작성자</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentPosts && currentPosts.length > 0 ? (
                  currentPosts.map((e, index) => (
                    <TableRow className="post-table-row" key={index}>
                      <TableCell
                        sx={{
                          display: {
                            xs: "none",
                            sm: "none",
                            md: "table-cell",
                          },
                        }}
                      >
                        {e.postId}
                      </TableCell>{" "}
                      <TableCell
                        sx={{
                          textAlign: "left",
                          width: { xs: "100%", md: "40vw" },
                          cursor: "pointer",
                        }}
                        onClick={() => navigate(`/post/${e.postId}`)}
                      >
                        {e.title.slice(0, 26)}
                      </TableCell>
                      <TableCell
                        sx={{ display: { xs: "none", sm: "table-cell" } }}
                      >
                        {e.createDate.slice(0, 10)}
                      </TableCell>
                      <TableCell>{e.writer}</TableCell>
                      <TableCell>
                        <input
                          type={"checkbox"}
                          onChange={() => {
                            changeHandler(e.postId);
                          }}
                        />
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
          </Card>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{ mr: "30px", mb: "10px" }}
              variant="outlined"
              color="inherit"
              onClick={() => deleteSubmit(checkedInputs)}
            >
              삭제
            </Button>
          </Box>
        </Card>
      </Container>
      <Box sx={{ padding: "20px" }}>
        <Paging
          page={currentPage}
          count={totalItemsCount}
          setPage={setPage}
          unit={postPerPage}
        />
      </Box>
    </Box>
  );
};

export default Manage;
