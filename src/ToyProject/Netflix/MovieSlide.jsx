import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 5,
  },
  notebook: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieSlide = ({ movies }) => {
  // console.log("movies", movies);
  return (
    <div>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
      >
        {movies.results.map((item) => (
          <div key={item.id}>
            <MovieCard item={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
