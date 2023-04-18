import { Card, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 4,
  },
  notebook: {
    breakpoint: { max: 1439, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const ToyProjectSlide = () => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <Typography variant="h4" align="center" sx={{ mt: "3vh", mb: "3vh" }}>
        프로젝트 목록
      </Typography>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
        className="home-carousel"
      >
        <NavLink to={"https://klub.kr/"}>
          <img className="home-project-card" alt="klue" src={"/klue.png"} />
        </NavLink>
        <img
          className="home-project-card"
          onClick={() => navigate("/netflix")}
          alt="netflix"
          src={"/netflix.png"}
        />
        <NavLink to={"https://lemon-soju.tistory.com/40"}>
          <img
            className="home-project-card"
            alt="ransomware"
            src={"/ransomware.jpg"}
          />
        </NavLink>

        <img
          className="home-project-card"
          onClick={() => navigate("/developing")}
          alt="developing1"
          src={"/개발중1.png"}
        />
      </Carousel>
    </Card>
  );
};

export default ToyProjectSlide;
