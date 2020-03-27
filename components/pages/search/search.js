import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchForm from "../../search-form/SearchForm";
import SearchResultsContainer from "../../search-results/SearchResultsContainer";
import InfiniteScroll from "../../infinite-scroll/InfiniteScroll";

export default function Search({
  isActive,
  isSearchLoading,
  onSearchSubmitted,
  onInfiniteScroll
}) {
  return (
    <div>
      <SearchForm onSearchSubmitted={onSearchSubmitted} />
      <InfiniteScroll
        isActive={isActive}
        isLoading={isSearchLoading}
        onTrigger={() => onInfiniteScroll()}
      >
        <SearchResultsContainer />
      </InfiniteScroll>
    </div>
  );
}

Search.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isSearchLoading: PropTypes.bool.isRequired,
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired
};
