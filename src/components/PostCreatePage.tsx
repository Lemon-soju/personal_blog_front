import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { writePost } from "../controller/controller";
import { Box, Button, Card, Container, TextField } from "@mui/material";
import TextEditor from "./TextEditor";
import { Editor } from "@toast-ui/react-editor";
import Footer from "./Footer";

const PostCreate = () => {
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const postSubmit = async (
    e: React.ChangeEvent<HTMLTextAreaElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const data = { title, content: editorRef.current?.getInstance().getHTML() };
    let accessToken = localStorage.getItem("accessToken");
    let response = await writePost(data, accessToken);
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
      }}
    >
      <form onSubmit={(e) => postSubmit(e)}>
        <Container
          sx={{
            display: "flex",
            paddingTop: 10,
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
              width: { xs: "100%", sm: "100%", md: "80%", lg: "80%" },
              backgroundColor: "rgba(255, 255, 255, 1)",
              mb: "2vh",
            }}
          />

          <Card
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "80%",
                lg: "80%",
              },
            }}
          >
            <TextEditor
              initialValue=""
              editorRef={editorRef}
              toolbarItems={[
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol", "task"],
                ["table", "link"],
                ["code", "codeblock"],
              ]}
            />
          </Card>

          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", sm: "100%", md: "80%", lg: "80%" },
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
      <Footer />
    </Box>
  );
};

export default PostCreate;
