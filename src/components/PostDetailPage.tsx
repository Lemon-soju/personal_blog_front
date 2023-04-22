import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readPost } from "../controller/controller";
import { Box, Card, Typography } from "@mui/material";

const PostDetail = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const getPost = useCallback(async () => {
    // params.id가 undefined인 경우
    if (!params.id) return;
    let post = await readPost(params.id);
    setTitle(post.data.title);
    setContent(post.data.content);
  }, [params.id]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <Box>
      <Card sx={{ backgroundColor: "rgba(155, 155, 155, 1)" }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "80%", sm: "70%", md: "60%" },
            fontSize: { xs: "30px", sm: "40px", md: "50px" },
            color: "white",
            mx: "auto",
            height: "30vh",
          }}
        >
          {title}
        </Typography>
      </Card>
      <Box>
        <Typography
          sx={{
            fontSize: "18px",
            width: { xs: "80%", sm: "70%", md: "60%" },
            mt: "10vh",
            mx: "auto",
          }}
        >
          {content}
        </Typography>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "20%",
          marginTop: "8vh",
        }}
      >
        <button
          onClick={(e) =>
            navigate(`/post/edit/${params.id}`, {
              state: {
                title: title,
                content: content,
              },
            })
          }
        >
          수정
        </button>
      </div>
    </Box>
  );
};

export default PostDetail;
