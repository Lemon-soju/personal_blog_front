import netflixApi from "../api/netflixApi";

const API_KEY = process.env.REACT_APP_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularApi = netflixApi.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = netflixApi.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = netflixApi.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = netflixApi.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([popularApi, topRatedApi, upComingApi, genreApi]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
};

const getMovieDetail = (movie_id) => {
  return async (dispatch) => {
    const movieDetailApi = await netflixApi.get(
      `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: "GET_MOVIE_DETAIL",
      payload: { movieDetail: movieDetailApi.data },
    });
    console.log("movieDetail reducer", movieDetailApi);
  };
};

export const netflixMovieAction = {
  getMovies,
  getMovieDetail,
};
