import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { writePost } from "../controller/controller";
import ReactQuill from "react-quill";
import { Box, Button, Container, TextField } from "@mui/material";
import { modules } from "../utils/editor";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const postSubmit = async (
    e: React.ChangeEvent<HTMLTextAreaElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const data = { title, content };
    let accessToken = localStorage.getItem("accessToken");
    let response = await writePost(data, accessToken);
    console.log(response);
    if (response.status === 200) {
      window.alert("글쓰기 성공");
      navigate("/");
      return;
    }
    if (response.status === 401) {
      window.alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    } else {
      window.alert("글쓰기 실패");
      return;
    }
  };

  return (
    <div className="main-body">
      <form onSubmit={(e) => postSubmit(e)}>
        <Container
          sx={{
            display: "flex",
            mt: "10vh",
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
              width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          />
          <Box sx={{ width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" } }}>
            <ReactQuill
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e)}
              style={{
                height: "50vh",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
              modules={modules}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
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

export default PostCreate;
