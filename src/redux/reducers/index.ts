import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import netflixMovieReducer from "./netflixMovieReducer";

const rootReducer = combineReducers({
  netflixMovie: netflixMovieReducer,
  home: homeReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
