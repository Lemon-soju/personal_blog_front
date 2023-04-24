import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../controller/controller";
import { Box, Button } from "@mui/material";

function Login() {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };

  const loginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { uid, pwd };
    let response = await login(data);
    const accessToken = response.data.accessToken;
    if (response.status === 200) {
      window.alert("로그인 성공");
      localStorage.setItem("uid", uid);
      localStorage.setItem("accessToken", accessToken);
      return navigate("/");
    } else {
      window.alert("로그인 실패");
      return window.location.reload();
    }
  };

  return (
    <div className="main-body">
      <form onSubmit={(e) => loginSubmit(e)}>
        <Box style={{ margin: "7vh" }}>
          <h3>Login</h3>
          <Box>
            <label htmlFor="uid">아이디</label>
            <br />
            <input
              id="uid"
              type="text"
              value={uid}
              onChange={(event) => {
                setUid(event.target.value);
              }}
            />
          </Box>
          <Box>
            <label htmlFor="pwd">비밀번호</label> <br />
            <input
              id="pwd"
              type="password"
              value={pwd}
              onChange={(event) => {
                setPwd(event.target.value);
              }}
            />
          </Box>
          <Button
            variant="outlined"
            color="inherit"
            type="submit"
            sx={{ mt: "2vh" }}
          >
            로그인
          </Button>
          <p />
          <Button variant="outlined" color="inherit" onClick={goToSignUp}>
            회원가입
          </Button>
        </Box>
      </form>
    </div>
  );
}
export default Login;
