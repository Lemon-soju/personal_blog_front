import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundColor: "white", height: "100vh", marginLeft: "2.5vw" }}
    >
      <div
        style={{
          marginLeft: "20px",
          marginTop: "10vh",
          fontSize: "1.3rem",
          color: "#090809",
        }}
      >
        신입 개발자 윤창규입니다.
      </div>
      <div style={{ display: "flex", marginTop: "4vh" }}>
        <div>
          <img
            alt="sketch"
            src={"/sketch.png"}
            style={{
              width: "175px",
              minWidth: "100px",
              float: "left",
              marginLeft: "20px",
            }}
          />
        </div>
        <div
          className="subhead_2"
          style={{
            marginLeft: "75px",
            marginBottom: "100px",
          }}
        >
          <div>
            Contact.
            <div className="normal_2" style={{ marginTop: "2vh" }}>
              <span>Email. yckk980320@naver.com</span>
              <p>Phone. 010-****-****</p>
            </div>
          </div>

          <div style={{ marginTop: "50px" }}>
            Channel.
            <div className="normal_2" style={{ marginTop: "2vh" }}>
              <span>
                <a href="http://lemon-soju.tistory.com">
                  Blog. https://lemon-soju.tistory.com/
                </a>
              </span>
              <p>
                <a href="https://github.com/Lemon-soju">
                  GitHub. https://github.com/Lemon-soju
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr
        contentEditable="false"
        data-ke-type="horizontalRule"
        data-ke-style="style5"
      />

      <div
        className="subhead_1"
        style={{ marginTop: "100px", marginLeft: "20px" }}
      >
        Introduce.
        <div
          className="normal_1"
          style={{ marginTop: "100px", maxWidth: "1000px" }}
        >
          <p>
            자바 스프링 백엔드 개발자를 준비하고 있는 신입 개발자입니다.
            카페에서 코딩하는 것을 즐기며 이것저것 만들어보면서 백앤드 뿐만
            아니라 프론트엔드도 같이 공부하고 있습니다.
          </p>
          <p>
            다른 사람들이 제가 만든 프로그램을 사용한다는 상상을 하면 더욱 더
            빨리 성장하고 싶은 생각이 듭니다.
          </p>
        </div>
      </div>

      <hr
        contentEditable="false"
        data-ke-type="horizontalRule"
        data-ke-style="style5"
        style={{ marginTop: "100px" }}
      />

      <div
        className="subhead_1"
        style={{ marginTop: "100px", marginLeft: "20px" }}
      >
        Project Experience.
        <div style={{ marginTop: "20px" }}>
          <NavLink to={"https://lemon-soju.tistory.com/40"}>
            <img
              className="project-card"
              alt="ransomware"
              src={"/ransomware.jpg"}
            />
          </NavLink>
          <img
            className="project-card"
            onClick={() => navigate("/netflix")}
            alt="netflix"
            src={"/netflix.png"}
          />
        </div>
      </div>
      <hr className="divide-line" />
      <div
        className="subhead_1"
        style={{ marginTop: "100px", marginLeft: "20px" }}
      >
        Skill.
        <div className="normal_1" style={{ marginTop: "20px" }}>
          <p>Front-End: React.js</p>
          <p>Back-End: Spring Boot</p>
          <p>Database: PostgreSQL</p>
        </div>
      </div>

      <hr />

      <div
        className="subhead_1"
        style={{ marginTop: "100px", marginLeft: "20px" }}
      >
        Education.
        <div className="normal_1" style={{ marginTop: "30px" }}>
          고려대학교 컴퓨터학과 4학년 휴학 중
        </div>
      </div>
    </div>
  );
};

export default About;
