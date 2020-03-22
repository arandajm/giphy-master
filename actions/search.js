export const SEARCH_PERFORMED = "SEARCH_PERFORMED";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

// Define action error function
export const searchError = () => ({
  typer: SEARCH_ERROR
});

// Define action performed function
export const searchPerformed = searchTerm => ({
  typer: SEARCH_PERFORMED,
  searchTerm
});

// Define action success function
export const searchSuccess = results => ({
  type: SEARCH_SUCCESS,
  results
});
