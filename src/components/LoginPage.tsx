import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../controller/controller";

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
        <div className="login-form">
          <h3>Login</h3>
          <div>
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
          </div>
          <div>
            <label htmlFor="pwd">비밀번호</label> <br />
            <input
              id="pwd"
              type="password"
              value={pwd}
              onChange={(event) => {
                setPwd(event.target.value);
              }}
            />
          </div>
          <button style={{ marginTop: "2vh" }} type="submit">
            로그인
          </button>
          <p />
          <button onClick={goToSignUp}>회원가입</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
