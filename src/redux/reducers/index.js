import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import netflixMovieReducer from "./netflixMovieReducer";

export default combineReducers({
  netflixMovie: netflixMovieReducer,
  home: homeReducer,
});
