import React from "react";

interface Movie {
  poster_path: string;
  title: string;
  overview: string;
}

const Banner = ({ movie }: { movie: Movie }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
          ")",
      }}
    >
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
