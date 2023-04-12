import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../controller/controller";

function SignUp() {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const signUpSubmit = async (event: any) => {
    event.preventDefault();
    const data = { uid, pwd, name };
    let response = await signUp(data);
    if (response.status === 200) {
      window.alert("회원가입 성공");
      return navigate("/");
    } else {
      window.alert("회원가입 실패");
      console.log(response.status);
      return window.location.reload();
    }
  };

  return (
    <div className="main-body">
      <form onSubmit={(e) => signUpSubmit(e)}>
        <div className="signup-form">
          <h3>Sign Up</h3>
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
              type="text"
              value={pwd}
              onChange={(event) => {
                setPwd(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="name">이름</label> <br />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <button style={{ marginTop: "2vh" }} type="submit">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
