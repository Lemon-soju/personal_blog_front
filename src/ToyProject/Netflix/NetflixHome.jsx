import React, { useEffect } from "react";
import { netflixMovieAction } from "../../redux/actions/netflixMovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import MovieSlide from "./MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const NetflixHome = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.netflixMovie);

  useEffect(() => {
    dispatch(netflixMovieAction.getMovies());
  }, [dispatch]);
  if (loading) {
    return (
      <div className="loading">
        <ClipLoader color={"#000"} loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="netflix-body">
      {<Banner movie={popularMovies.results[0]} />}
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default NetflixHome;
