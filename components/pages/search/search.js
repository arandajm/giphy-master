import React, { Component } from "react";
import SearchFormContainer from "../../search-form/SearchFormContainer";
import SearchResultsContainer from "../../search-results/SearchResultsContainer";
import InfiniteScroll from "../../infinite-scroll/InfiniteScroll";

export default function Search() {
  return (
    <div>
      <SearchFormContainer />
      <InfiniteScroll
        isLoading={false}
        onTrigger={() => console.log("Infinite Scroll triggered!!")}
      >
        <SearchResultsContainer />
      </InfiniteScroll>
    </div>
  );
}
