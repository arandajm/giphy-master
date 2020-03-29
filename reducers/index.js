import { combineReducers } from "redux";
import searchReducer from "./search";
import giphyDisplay from "./giphy-display";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  router: routerReducer,
  search: searchReducer,
  // Adding the new reducer into the combineReducer
  giphyDisplay: giphyDisplay
});
