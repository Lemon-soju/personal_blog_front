import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { editPost } from "../controller/controller";
import { Box, Button, Container, TextField } from "@mui/material";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
import { modules } from "../utils/editor";
Quill.register("modules/ImageResize", ImageResize);

const PostEdit = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const editSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { id: params.id, title, content };
    let accessToken = localStorage.getItem("accessToken");
    let response = await editPost(data, accessToken);

    if (response.status === 200) {
      window.alert("글 수정 성공");
      navigate("/");
      return window.location.reload(); // 최신 글 바로 적용
    } else {
      window.alert("글 수정 실패");
      return window.location.reload();
    }
  };

  useEffect(() => {
    setTitle(location.state.title);
    setContent(location.state.content);
  }, [location.state.title, location.state.content]);

  return (
    <div className="main-body">
      <form onSubmit={(e) => editSubmit(e)}>
        <Container
          sx={{
            display: "flex",
            mt: "5vh",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />

          <ReactQuill
            placeholder="내용을 입력해주세요."
            value={content}
            onChange={(e) => setContent(e)}
            style={{
              height: "80vh",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              width: "100%",
              overflow: "hidden",
              paddingBottom: "3rem", // 여백 값 추가
            }}
            modules={modules}
          />

          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginLeft: "auto" }}
            >
              작성 완료
            </Button>
          </Box>
        </Container>
      </form>
    </div>
  );
};

export default PostEdit;
