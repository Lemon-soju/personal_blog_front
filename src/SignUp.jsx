import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "./controller";

function SignUp() {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const signUpSubmit = async (event) => {
    event.preventDefault();
    const data = { uid, pwd, name };
    let response = await signUp(data);
    // console.log(response);
    return navigate("/");
  };

  return (
    <>
      <h3>Sign Up</h3>
      <form onSubmit={(e) => signUpSubmit(e)}>
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
          <div className="form-el">
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
