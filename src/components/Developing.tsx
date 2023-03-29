import React from "react";
import { useNavigate } from "react-router-dom";

const Developing = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>아직 개발중~~</h1>
      <button style={{ marginTop: "100px" }} onClick={() => navigate("/")}>
        돌아가기
        <img
          alt="goback"
          style={{ margin: "10px" }}
          width="15px"
          src={"/goback.png"}
        />
      </button>
    </div>
  );
};

export default Developing;
