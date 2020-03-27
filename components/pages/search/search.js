import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchForm from "../../search-form/SearchForm";
import SearchResultsContainer from "../../search-results/SearchResultsContainer";
import InfiniteScroll from "../../infinite-scroll/InfiniteScroll";

export default function Search({ onSearchSubmitted, onInfiniteScroll }) {
  return (
    <div>
      <SearchForm onSearchSubmitted={onSearchSubmitted} />
      <InfiniteScroll isLoading={false} onTrigger={() => onInfiniteScroll()}>
        <SearchResultsContainer />
      </InfiniteScroll>
    </div>
  );
}

Search.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired
};
