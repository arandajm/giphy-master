import {
  SEARCH_SUCCESS,
  NEW_SEARCH,
  PERFORM_SEARCH,
  SEARCH_ERROR
} from "../actions/search";

const initialState = {
  results: [],
  // Adding current offset (default value: 0) to the initial state!
  currentOffset: 0,
  searchTerm: null,
  isLoading: false
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
          action.results.map(searchResultTransformer)
        ),
        // Incrementing in 50 the current offset ih the state
        currentOffset: state.currentOffset + 50,
        // Hide the spinner when the search is success
        isLoading: false
      };
    case NEW_SEARCH:
      return {
        ...state,
        results: [],
        currentOffset: 0,
        searchTerm: action.searchTerm
      };
    case PERFORM_SEARCH:
      return {
        ...state,
        // Show the spinner when search is performing
        isLoading: true
      };
    case SEARCH_ERROR:
      return {
        ...state,
        // Hide the spinner when the search has an error
        isLoading: false
      };

    default:
      return state;
  }
};
