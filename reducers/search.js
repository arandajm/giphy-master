import { SEARCH_SUCCESS, NEW_SEARCH } from "../actions/search";

const initialState = {
  results: [],
  // Adding current offset (default value: 0) to the initial state!
  currentOffset: 0,
  searchTerm: null
};

function searchResultTransformer(element) {
  const { images } = element;
  return {
    thumbnail: images.fixed_height_small_still
      ? images.fixed_height_small_still.url
      : null,
    full: images.original ? images.original.url : null
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
        // Transform the original action results to the expected (SearchResult) and concat them with the existing results!
        results: state.results.concat(
          action.results.map(element => searchResultTransformer(element))
        )
      };
    case NEW_SEARCH:
      return {
        ...state,
        results: [],
        currentOffset: 0,
        searchTerm: action.searchTerm
      };
    default:
      return state;
  }
};
