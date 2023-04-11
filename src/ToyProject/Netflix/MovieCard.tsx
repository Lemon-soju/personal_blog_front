import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/reducers";

interface MovieCardProps {
  item: {
    id: number;
    poster_path: string;
    title: string;
    genre_ids: number[];
    vote_average: number;
    adult: boolean;
  };
}

interface Genre {
  id: number;
  name: string;
}

const MovieCard = ({ item }: MovieCardProps) => {
  const { genreList } = useSelector((state: RootState) => state.netflixMovie);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/netflix/movies/${item.id}`)}
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id: number) => (
            <Badge bg="danger" key={id} style={{ margin: "2px" }}>
              {genreList.find((item: Genre) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span style={{ margin: "10px" }}>Score: {item.vote_average}</span>
          <span>
            {item.adult ? (
              <img
                width={20}
                src="/+18.png"
                alt="+18"
                style={{ marginLeft: "10px" }}
              />
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
