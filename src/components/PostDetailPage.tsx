import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readPost } from "../controller/controller";
import { Box, Card, Typography } from "@mui/material";

const PostDetail = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [createDate, setCreateDate] = useState("");

  const navigate = useNavigate();

  const getPost = useCallback(async () => {
    // params.id가 undefined인 경우
    if (!params.id) return;
    let post = await readPost(params.id);
    console.log(post);
    setTitle(post.data.title);
    setContent(post.data.content);
    setAuthor(post.data.author);
    setCreateDate(post.data.createDate);
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
            width: { xs: "80%", sm: "70%", md: "60%" },
            fontSize: { xs: "30px", sm: "40px", md: "50px" },
            color: "white",
            mx: "auto",
            height: "30vh",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "80%", sm: "70%", md: "60%" },
            color: "white",
            mx: "auto",
          }}
        >
          <Typography>by {author}</Typography>
          <Typography sx={{ mx: "4px" }}>·</Typography>
          <Typography>{createDate.slice(0, 10)}</Typography>
          <Typography sx={{ mx: "4px" }}>·</Typography>
          <Typography
            sx={{ color: "white", cursor: "pointer" }}
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
          </Typography>
        </Box>
      </Card>
      <Box>
        <Typography
          dangerouslySetInnerHTML={{ __html: content }}
          sx={{
            fontSize: "18px",
            width: { xs: "80%", sm: "70%", md: "60%" },
            mt: "10vh",
            mx: "auto",
          }}
        ></Typography>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "20%",
          marginTop: "8vh",
        }}
      ></div>
    </Box>
  );
};

export default PostDetail;
