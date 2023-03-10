import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { netflixMovieAction } from "../../redux/actions/netflixMovieAction";
import { useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";

const MovieDetail = () => {
  const params = useParams();
  const { movieDetail } = useSelector((state) => state.netflixMovie);
  const dispatch = useDispatch();
  let trivialData = [
    { name: "Budget", value: "$" + movieDetail.budget },
    { name: "Revenue", value: "$" + movieDetail.revenue },
    { name: "Release Day", value: movieDetail.release_date },
    { name: "Time", value: movieDetail.runtime },
  ];

  useEffect(() => {
    dispatch(netflixMovieAction.getMovieDetail(params.id));
  }, [dispatch, params.id]);

  let ageProhibition;
  if (movieDetail.adult) {
    ageProhibition = (
      <img width={20} src="/+18.png" alt="+18" style={{ marginLeft: "10px" }} />
    );
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail-poster">
        <img
          style={{ width: "100%" }}
          alt="poster"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}`}
        />
      </div>
      <div className="movie-detail-description">
        <h1 style={{ marginTop: "10%" }}>{movieDetail.title}</h1>
        <h5 style={{ marginTop: "2vh", marginBottom: "2vh" }}>
          {movieDetail.tagline}
        </h5>

        <p>
          <img width={20} src="/score.png" alt="netflix score" />
          {Number(movieDetail.vote_average).toFixed(1)}
          <img
            width={20}
            src="/like.png"
            alt="netflix like"
            style={{ marginLeft: "10px" }}
          />
          {movieDetail.vote_count}
          {ageProhibition}
        </p>
        <hr style={{ marginTop: "10px" }} />
        <p>{movieDetail.overview}</p>
        <hr style={{ marginTop: "10px" }} />
        <p style={{ lineHeight: "0" }}>
          {trivialData.map((e) => (
            <div key={e.name}>
              <Badge
                bg="danger"
                style={{ width: "80px", marginRight: "7px", marginTop: "4px" }}
              >
                {e.name}
              </Badge>
              {e.value}
            </div>
          ))}
        </p>
        <hr style={{ marginTop: "10px" }} />
      </div>
    </div>
  );
};

export default MovieDetail;
