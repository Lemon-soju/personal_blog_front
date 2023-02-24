import { combineReducers } from "redux";
import netflixMovieReducer from "./netflixMovieReducer";

export default combineReducers({
  netflixMovie: netflixMovieReducer,
});
