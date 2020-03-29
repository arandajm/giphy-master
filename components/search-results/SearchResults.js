import React from "react";
import PropTypes from "prop-types";
import * as CustomTypes from "../../lib/custom-types";
import SearchResult from "../search-result/SearchResult";
import styles from "./search-results.css";

export default function SearchResults({ results, searchResultClicked }) {
  const searchResults = results.map((result, i) => {
    return (
      <SearchResult
        result={result}
        key={i}
        onClick={() => searchResultClicked(result)}
      />
    );
  });
  return <div className={styles.container}>{searchResults}</div>;
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult),
  searchResultClicked: PropTypes.func.isRequired
};
