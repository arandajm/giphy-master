import React from "react";
import PropTypes from "prop-types";
import * as CustomTypes from "../../lib/custom-types";
import SearchResult from "../search-result/SearchResult";

export default function SearchResults({ results }) {
  const searchResults = results.map((result, i) => {
    return <SearchResult result={result} key={i} />;
  });
  return <div>{searchResults}</div>;
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult)
};
