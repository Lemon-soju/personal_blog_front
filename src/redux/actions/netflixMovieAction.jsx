import netflixApi from "../api/netflixApi";

const API_KEY = process.env.REACT_APP_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    const popularApi = netflixApi.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    const topRatedApi = netflixApi.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );

    const upComingApi = netflixApi.get(
      `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );

    let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
      popularApi,
      topRatedApi,
      upComingApi,
    ]);
    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovies: popularMovies.data,
        topRatedMovies: topRatedMovies.data,
        upComingMovies: upComingMovies.data,
      },
    });
  };
};

export const netflixMovieAction = {
  getMovies,
};
