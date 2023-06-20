import {
  Box,
  Card,
  Divider,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ["ONE-Mobile-Title"].join(","),
  },
});

const About = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ m: "2vw", fontFamily: "omyu_pretty" }}>
      <Card sx={{ m: "1px", minHeight: "58vh", fontFamily: "omyu_pretty" }}>
        <Box sx={{ ml: "2vw" }}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                mt: "4vh",
                mb: "2vh",
                fontSize: "1.8rem",
              }}
            >
              기술에 구애받지 않는 맥가이버,
              <br />
              개발자 윤창규입니다.
            </Box>
          </ThemeProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
            }}
          >
            <Box sx={{ display: "flex", mt: "2vh" }}>
              <img
                alt="profile"
                src={"/profile.jpg"}
                style={{
                  width: "240px",
                  height: "320px",
                }}
              />
            </Box>

            <Box
              sx={{
                ml: "3vw",
                display: "flex",
                flexDirection: "column",
                mt: "5vh",
                fontSize: "1.8rem",
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
                <Box sx={{ mt: "7vh" }}>Channel.</Box>
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
                maxWidth: "50vw",
                color: "black",
              }}
            >
              <p>
                저는 조용한 카페에서 코딩하는 것을 즐기며 호기심이 많은
                사람입니다. 교내 서비스 개발팀에서 프로젝트를 진행하며 팀 내
                분위기와 소통의 중요성을 깨달았습니다. 코딩 실력 뿐만 아니라
                개발의 전체적인 흐름을 이해하기 위해 프론트엔드와 컨벤션 등도
                함께 공부하고 있습니다. 실제 서비스를 운영해보고 싶어서 AWS
                서비스를 통해 개인 블로그를 운영하고 있으며, 다른 프로젝트를
                진행하면서 공부한 내용들은 개인 블로그 코드에 적용하면서
                연구하고 있습니다.
              </p>
              <br />
              <p>
                코딩을 할 때는 문제를 해결해냈다는 성취감 그리고 사람들이 내가
                만든 프로그램을 사용한다는 상상을 하면서 느끼는 설레는 감정 두
                가지를 발판 삼아 더 열정적으로 코딩하는 중입니다.
              </p>
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
              <Divider sx={{ m: "5vh" }} />

              <Link
                href="https://klub.kr/"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h4"
                  color="#555555"
                  sx={{
                    ":hover": { textDecoration: "underline" },
                  }}
                >
                  klub 프로젝트
                </Typography>
              </Link>

              <Typography sx={{ mt: "2vh" }}>
                <Link
                  href="https://hijihyo.notion.site/KLUB-32acaba216114f37b3c1edd32bb080fe"
                  target="_blank"
                  sx={{ textDecoration: "none" }}
                >
                  klub이란?
                  <br />
                </Link>
                - KLUB은 기존의 구글 시트 기반 회원 관리를 대체할 서비스입니다.
                고려대학교 교내 동아리 운영진 및 가입자에게 리쿠르팅, 명단, 출석
                관리, 홍보(Coming soon) 서비스를 제공합니다.
              </Typography>
              <br />
              <Box sx={{ display: "flex" }}>
                <Typography color="#222222" mr={1}>
                  프론트엔드
                </Typography>
                <Typography>2023.03~2023.04</Typography>
              </Box>
              <Typography>
                - 회원 및 활동을 더 효율적으로 관리하기 위해{" "}
                <Link
                  href="https://lemon-soju.tistory.com/475"
                  target="_blank"
                  sx={{ textDecoration: "none" }}
                >
                  학기 개념 추가
                </Link>
              </Typography>
              <Typography>
                - git flow 전략을 사용하면서 체계적인 협업 경험
              </Typography>
              <Typography>
                - 상호간에 github 코드 리뷰를 통한 실력 증진 및 같은 목표 추구
              </Typography>
              <Divider sx={{ m: "5vh" }} />
              <Link
                href="https://lemonsoju.blog"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h4"
                  color="#555555"
                  sx={{
                    mt: "10vh",
                    ":hover": { textDecoration: "underline" },
                  }}
                >
                  개인 블로그 프로젝트
                </Typography>
              </Link>

              <Typography sx={{ mt: "2vh" }}>
                리액트, 자바 스프링, PostgreSQL을 조합하여 블로그를 만드는
                프로젝트입니다.
              </Typography>

              <Box sx={{ display: "flex", mt: "5vh" }}>
                <Typography color="#222222" mr={1}>
                  프론트엔드
                </Typography>
                <Typography>2022.07~2023.06</Typography>
              </Box>
              <Typography>- MUI를 통한 사용자 인터페이스 구축</Typography>
              <Typography>- 타입 스크립트를 통한 타입 안정성 향상</Typography>

              <Box sx={{ display: "flex", mt: "5vh" }}>
                <Typography color="#222222" mr={1}>
                  백엔드
                </Typography>
                <Typography>2022.07~2023.06</Typography>
              </Box>
              <Typography>
                - MVC 패턴을 이용하여 블로그 CRUD 기능 구현
              </Typography>
              <Typography>- JWT를 통한 로그인 및 로그아웃 기능 구현</Typography>
              <Typography>
                - 도메인 구매 및 https 적용을 통해 브라우저에서 접근 가능하도록
                설정
              </Typography>
              <Divider sx={{ m: "5vh" }} />
              <Typography
                onClick={() => navigate("/netflix")}
                variant="h4"
                color="#555555"
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

              <Divider sx={{ m: "5vh" }} />
              <Link
                href="https://lemon-soju.tistory.com/40"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h4"
                  color="#555555"
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
              <br />

              <Box sx={{ display: "flex" }}>
                <Typography color="#222222" mr={1}>
                  공격팀
                </Typography>
                <Typography>2021.03~2021.06</Typography>
              </Box>
              <Typography>
                - 가상 환경에 실제 실무 환경과 유사한 인프라 구축(라우터, IPS,
                AD 서버 담당)
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
            <p>Back-End: Spring Boot, AWS(EC2, RDS, Route 53)</p>
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
