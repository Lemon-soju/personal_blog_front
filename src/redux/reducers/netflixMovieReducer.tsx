let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  genreList: [],
  movieDetail: {},
};

interface Action {
  type:
    | "GET_MOVIES_REQUEST"
    | "GET_MOVIES_SUCCESS"
    | "GET_MOVIES_FAILURE"
    | "GET_MOVIE_DETAIL";
  payload?: any;
}

const netflixMovieReducer = (state = initialState, action: Action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: payload.movieDetail,
      };
    default:
      return { ...state };
  }
};

export default netflixMovieReducer;
