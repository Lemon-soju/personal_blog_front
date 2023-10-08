import { combineReducers } from "redux";
import netflixMovieReducer from "./netflixMovieReducer";

const rootReducer = combineReducers({
  netflixMovie: netflixMovieReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
