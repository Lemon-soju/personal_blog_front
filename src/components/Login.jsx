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

  const loginSubmit = async (event) => {
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
    <>
      <h3>Login</h3>
      <form onSubmit={(e) => loginSubmit(e)}>
        <div className="form">
          <div className="form-el">
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
          <div className="form-el">
            <label htmlFor="pwd">비밀번호</label> <br />
            <input
              id="pwd"
              type="text"
              value={pwd}
              onChange={(event) => {
                setPwd(event.target.value);
              }}
            />
          </div>
          <button type="submit">제출</button>
        </div>
      </form>
      <div className="signup-button" onClick={goToSignUp}>
        <div>회원가입</div>
        <br />
      </div>
    </>
  );
}
export default Login;