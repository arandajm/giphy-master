import { SEARCH_SUCCESS } from "../actions/search";

const initialState = {
  results: []
};

function searchResultTransformer(element) {
  const { images } = element;
  return {
    thumbnail: images.fixed_height_small_still
      ? images.fixed_height_small_still.url
      : null,
    full: images.original ? images.url : null
  };
}

export default (state, action) => {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        // Transform the original action results to the expected (SearchResult)
        results: action.results.map(element => searchResultTransformer)
      };
    default:
      return state;
  }
};
