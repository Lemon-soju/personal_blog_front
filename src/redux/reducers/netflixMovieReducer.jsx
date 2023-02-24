let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
};

const netflixMovieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
      };
    default:
      return { ...state };
  }
};

export default netflixMovieReducer;
