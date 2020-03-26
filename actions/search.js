export const PERFORM_SEARCH = "PERFORME_SEARCH";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const NEW_SEARCH = "NEW_SEARCH";

// Define action error function
export const searchError = () => ({
  type: SEARCH_ERROR
});

// Define action performed function
export const searchPerformed = () => ({
  type: PERFORM_SEARCH
});

// Define action success function
export const searchSuccess = results => ({
  type: SEARCH_SUCCESS,
  results
});

// Define new search action function
export const newSearch = searchTerm => ({
  type: NEW_SEARCH,
  searchTerm
});
