import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { editPost } from "../controller/controller";
import { Box, Button, Card, Container, TextField } from "@mui/material";
import TextEditor from "./TextEditor";
import { Editor } from "@toast-ui/react-editor";

const PostEdit = () => {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const editorRef = useRef<Editor>(null);

  const editSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let content = "";
    if (editorRef.current) {
      content = editorRef.current.getInstance().getHTML();
    }

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
  }, [location.state.title]);

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
              initialValue={location.state.content}
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
    </div>
  );
};

export default PostEdit;
