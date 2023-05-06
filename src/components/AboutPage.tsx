import { Box, Card, Link, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ m: "2vw" }}>
      <Card sx={{ m: "1px", minHeight: "50vh" }}>
        <Box sx={{ ml: "2vw" }}>
          <Box sx={{ mt: "4vh", mb: "2vh", fontSize: "1.5rem" }}>
            프로그래머 윤창규입니다.
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
            }}
          >
            <Box sx={{ display: "flex", mt: "2vh" }}>
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
                fontSize: "1.5rem",
                color: "#5b8bd9",
              }}
            >
              <Box>
                Contact.
                <Box sx={{ fontSize: "0.85rem", color: "#7e7e7e", mt: "2vh" }}>
                  Email. yckk980320@naver.com
                  <br />
                  Phone. 010-****-****
                </Box>
              </Box>
              <Box>
                <Box sx={{ mt: "3vh" }}>Channel.</Box>
                <Box sx={{ fontSize: "0.85rem", color: "#7e7e7e", mt: "2vh" }}>
                  <a href="http://lemon-soju.tistory.com">
                    Blog. https://lemon-soju.tistory.com
                  </a>
                  <br />
                  <a href="https://github.com/Lemon-soju">
                    GitHub. https://github.com/Lemon-soju
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card sx={{ m: "1px", minHeight: "50vh" }}>
        <Box
          sx={{
            m: "2vw",
            mt: "12vh",
            fontSize: "2rem",
            color: "#5b8bd9",
          }}
        >
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
        <Box
          sx={{
            mt: "12vh",
            ml: "2vw",
            fontSize: "2rem",
            color: "#5b8bd9",
          }}
        >
          Project Experience.
          <Box sx={{ mt: "2vh", display: "flex", flexWrap: "wrap" }}>
            <Card sx={{ m: "16px" }}>
              <NavLink to={"https://klub.kr/"}>
                <img
                  className="about-project-card"
                  alt="klue"
                  src={"/klue.png"}
                />
              </NavLink>
            </Card>
            <Card sx={{ m: "16px" }}>
              <img
                className="about-project-card"
                onClick={() => navigate("/netflix")}
                alt="netflix"
                src={"/netflix.png"}
              />
            </Card>
            <Card sx={{ m: "16px" }}>
              <NavLink to={"https://lemon-soju.tistory.com/40"}>
                <img
                  className="about-project-card"
                  alt="ransomware"
                  src={"/ransomware.jpg"}
                />
              </NavLink>
            </Card>
            <Box sx={{ mt: "20vh", color: "#7e7e7e", mb: "10vh" }}>
              <Link
                href="https://klub.kr/"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h4"
                  color="#7e7e7e"
                  sx={{
                    ":hover": { textDecoration: "underline" },
                  }}
                >
                  klub 프로젝트
                </Typography>
              </Link>

              <Typography sx={{ mt: "2vh" }}>
                KLUB은 기존의 구글 시트 기반 회원 관리를 대체할 서비스입니다.
                고려대학교 교내 동아리 운영진 및 가입자에게 리쿠르팅, 명단, 출석
                관리, 홍보(Coming soon) 서비스를 제공합니다.
              </Typography>

              <Typography
                onClick={() => navigate("/netflix")}
                variant="h4"
                color="#7e7e7e"
                sx={{
                  mt: "10vh",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                넷플릭스 클론 프로젝트
              </Typography>

              <Typography sx={{ mt: "2vh" }}>
                The Movie Database (TMDB) api를 활용하여 현재 영화 순위를
                알려주는 서비스 입니다. 영화 개봉일, 제작비, 상영 시간 등의
                정보를 제공합니다.
              </Typography>

              <Link
                href="https://lemon-soju.tistory.com/40"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h4"
                  color="#7e7e7e"
                  sx={{
                    mt: "10vh",
                    ":hover": { textDecoration: "underline" },
                  }}
                >
                  시나리오 기반 모의해킹 프로젝트
                </Typography>
              </Link>

              <Typography sx={{ mt: "2vh" }}>
                실제 실무환경과 유사한 인프라를 구축 후 시나리오를 구성하여
                모의해킹 그리고 침해대응 및 분석까지 진행한 프로젝트 입니다.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card sx={{ m: "1px", minHeight: "50vh" }}>
        <Box
          sx={{
            mt: "15vh",
            ml: "2vw",
            fontSize: "2rem",
            color: "#5b8bd9",
          }}
        >
          Skill.
          <Typography sx={{ color: "black", mt: "5vh", fontSize: "1.1rem" }}>
            <p>Front-End: React.js</p>
            <p>Back-End: Spring Boot</p>
            <p>Database: PostgreSQL</p>
          </Typography>
        </Box>
      </Card>
      <Card sx={{ m: "1px", minHeight: "50vh" }}>
        <Box
          sx={{
            mt: "17vh",
            ml: "2vw",
            fontSize: "2rem",
            color: "#5b8bd9",
          }}
        >
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
