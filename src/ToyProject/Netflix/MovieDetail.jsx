import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { netflixMovieAction } from "../../redux/actions/netflixMovieAction";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();
  const { movieDetail } = useSelector((state) => state.netflixMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(netflixMovieAction.getMovieDetail(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="movie-detail">
      <img
        className="movie-detail-poster"
        alt="poster"
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}`}
      />
      <div className="movie-detail-description">
        <h1>{movieDetail.original_title}</h1>
        <p>
          {movieDetail.vote_average} {movieDetail.vote_count}
        </p>
        <p>{movieDetail.overview}</p>
        <p>budget {movieDetail.budget}</p>
        <p>revenue {movieDetail.revenue}</p>
        <p>release day {movieDetail.release_date}</p>
        <p>time {movieDetail.runtime}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
