import { Box, Card, CardHeader, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ m: "2vw" }}>
      <Card sx={{ m: "1px", minHeight: "50vh" }}>
        <CardHeader
          sx={{ ml: "1vw", mt: "4vh" }}
          title="프로그래머 윤창규입니다."
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
          }}
        >
          <Box sx={{ display: "flex", mt: "2vh", ml: "2vw" }}>
            <img
              alt="sketch"
              src={"/sketch.png"}
              style={{
                width: "170px",
                height: "235px",
              }}
            />
          </Box>

          <Box
            sx={{
              ml: "3vw",
              display: "flex",
              flexDirection: "column",
              mt: "2vh",
            }}
          >
            <Box>
              <div className="subhead_2">Contact.</div>
              <div className="normal_2" style={{ marginTop: "2vh" }}>
                <span>Email. yckk980320@naver.com</span>
                <p>Phone. 010-****-****</p>
              </div>
            </Box>
            <Box>
              <div className="subhead_2" style={{ marginTop: "3vh" }}>
                Channel.
              </div>
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
            </Box>
          </Box>
        </Box>
      </Card>
      <Card sx={{ m: "1px", minHeight: "50vh" }}>
        <Box className="subhead_1" sx={{ m: "2vw", mt: "12vh" }}>
          Introduce.
          <div>
            <Typography
              sx={{
                mt: "100px",
                mb: "150px",
                maxWidth: "1000px",
                color: "black",
              }}
            >
              자바 스프링 백엔드 개발자를 준비하고 있는 신입 개발자입니다.
              카페에서 코딩하는 것을 즐기며 이것저것 만들어보면서 백앤드 뿐만
              아니라 프론트엔드도 같이 공부하고 있습니다.
              <p />
              다른 사람들이 제가 만든 프로그램을 사용한다는 상상을 하면 더욱 더
              빨리 성장하고 싶은 생각이 듭니다.
            </Typography>
          </div>
        </Box>
      </Card>
      <Card sx={{ m: "1px", minHeight: "50vh" }}>
        <Box className="subhead_1" sx={{ mt: "12vh", ml: "2vw" }}>
          Project Experience.
          <Box sx={{ mt: "2vh", display: "flex", flexWrap: "wrap" }}>
            <Card sx={{ m: "16px" }}>
              <NavLink to={"https://klub.kr/"}>
                <img className="project-card" alt="klue" src={"/klue.png"} />
              </NavLink>
            </Card>
            <Card sx={{ m: "16px" }}>
              <img
                className="project-card"
                onClick={() => navigate("/netflix")}
                alt="netflix"
                src={"/netflix.png"}
              />
            </Card>
            <Card sx={{ m: "16px" }}>
              <NavLink to={"https://lemon-soju.tistory.com/40"}>
                <img
                  className="project-card"
                  alt="ransomware"
                  src={"/ransomware.jpg"}
                />
              </NavLink>
            </Card>
          </Box>
        </Box>
      </Card>
      <Card sx={{ m: "1px", minHeight: "50vh" }}>
        <Box className="subhead_1" sx={{ mt: "15vh", ml: "2vw" }}>
          Skill.
          <Typography sx={{ color: "black", mt: "5vh", fontSize: "1.1rem" }}>
            <p>Front-End: React.js</p>
            <p>Back-End: Spring Boot</p>
            <p>Database: PostgreSQL</p>
          </Typography>
        </Box>
      </Card>
      <Card sx={{ m: "1px", minHeight: "50vh" }}>
        <Box className="subhead_1" sx={{ mt: "17vh", ml: "2vw" }}>
          Education.
          <Typography sx={{ color: "black", mt: "5vh", fontSize: "1.1rem" }}>
            고려대학교 컴퓨터학과 4학년 휴학 중
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default About;
