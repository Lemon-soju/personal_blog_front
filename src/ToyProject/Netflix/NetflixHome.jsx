import React, { useEffect } from "react";
import { netflixMovieAction } from "../../redux/actions/netflixMovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";

const NetflixHome = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.netflixMovie
  );

  useEffect(() => {
    dispatch(netflixMovieAction.getMovies());
  }, []);

  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    </div>
  );
};

export default NetflixHome;
