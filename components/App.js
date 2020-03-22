import React from "react";
import SearchForm from "./search-form/SearchForm";
import SearchResultsContainer from "./search-results/SearchResults.Container";

export default () => (
  <div>
    <SearchForm onSearchSubmitted={term => console.log(term)} />
    <SearchResultsContainer />
  </div>
);
