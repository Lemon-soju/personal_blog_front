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
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

const ToyProjectSlide = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ width: "70%" }}>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
      >
        <NavLink to={"https://lemon-soju.tistory.com/40"}>
          <img
            className="home-project-card"
            alt="ransomware"
            src={"/ransomware.jpg"}
          />
        </NavLink>
        <img
          className="home-project-card"
          onClick={() => navigate("/netflix")}
          alt="netflix"
          src={"/netflix.png"}
        />
        <img
          className="home-project-card"
          onClick={() => navigate("/developing")}
          alt="developing1"
          src={"/개발중1.png"}
        />
        <img
          className="home-project-card"
          onClick={() => navigate("/developing")}
          alt="developing2"
          src={"/개발중2.png"}
        />
        <img
          className="home-project-card"
          onClick={() => navigate("/developing")}
          alt="developing1"
          src={"/개발중1.png"}
        />
      </Carousel>
    </div>
  );
};

export default ToyProjectSlide;
