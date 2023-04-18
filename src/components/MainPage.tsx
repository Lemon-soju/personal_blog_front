import React from "react";
import Post from "./Post";
import ToyProjectSlide from "./ToyProjectSlide";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";

// 로그인 후 화면
const Main = () => {
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
          backgroundSize: "cover", // 이미지 크기를 조정합니다.
        },
      }}
    >
      <Container style={{ marginTop: "5vh" }}>
        <ToyProjectSlide />
      </Container>
      <Container style={{ marginTop: "5vh" }}>
        <Post />
      </Container>
    </Box>
  );
};

export default Main;
