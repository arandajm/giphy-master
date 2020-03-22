import React from "react";
import PropTypes from "prop-types";
import * as CustomTypes from "../../lib/custom-types";
import SearchResult from "../SearchResult/SearchResult";
import SearchForm from "../SearchForm/SearchForm";

export default function SearchResults({ results }) {
  const searchResults = results.map(result => {
    return <SearchResult result={result} />;
  });
  return <div>{searchResults}</div>;
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult)
};
