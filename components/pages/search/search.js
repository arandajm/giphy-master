import React, { Component } from "react";
import SearchFormContainer from "../../search-form/SearchFormContainer";
import SearchResultsContainer from "../../search-results/SearchResultsContainer";
import SearchResults from "../../search-results/SearchResults";

export default function Search() {
  return (
    <div>
      <SearchFormContainer />
      <SearchResultsContainer />
    </div>
  );
}
