import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ReplayIcon from "@mui/icons-material/Replay";

const Developing = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: "center", mt: "10vh" }}>
      <h1>아직 개발중~~</h1>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ mt: "100px" }}
        onClick={() => navigate("/")}
      >
        돌아가기
        <ReplayIcon fontSize="small" />
      </Button>
    </Box>
  );
};

export default Developing;
