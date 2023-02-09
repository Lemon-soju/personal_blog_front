import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  //   const signUpSubmit = async (event) => {
  //     event.preventDefault();
  //     const data = { uid, pwd, name };
  //     console.log(data); //debug
  //     return navigate("/");
  //   };

  return (
    <>
      <h3>Sign Up</h3>
      <div className="form" onSubmit={(e) => signUpSubmit(e)}>
        <div className="form-el">
          <label for="uid">아이디</label>
          <br />
          <input id="uid" value={uid} />
        </div>

        <div className="form-el">
          <label htmlFor="pwd">비밀번호</label> <br />
          <input id="pwd" value={pwd} />
        </div>
        <div className="form-el">
          <label htmlFor="name">이름</label> <br />
          <input id="name" value={name} />
        </div>
        <button type="submit">Submit</button>
      </div>
    </>
  );
}

export default SignUp;
