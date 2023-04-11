import React, { useEffect } from "react";
import { netflixMovieAction } from "../../redux/actions/netflixMovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import MovieSlide from "./MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import { RootState } from "../../redux/reducers";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface Movies {
  movies: {
    results: {
      id: number;
      poster_path: string;
      title: string;
      genre_ids: number[];
      vote_average: number;
      release_date: string;
      adult: boolean;
    }[];
  };
}

export interface Movie {
  item: {
    id: number;
    poster_path: string;
    title: string;
    genre_ids: number[];
    vote_average: number;
    release_date: string;
    adult: boolean;
  };
}

const NetflixHome = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state: RootState) => state.netflixMovie);

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
