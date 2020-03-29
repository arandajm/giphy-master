import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchResultsContainer from "../../search-results/SearchResultsContainer";
import InfiniteScroll from "../../infinite-scroll/InfiniteScroll";

export class Trending extends Component {
  // call onSearchSubmitted, when after the component was mounted!
  componentDidMount() {
    this.props.onSearchSubmitted();
  }
  render() {
    const { isActive, isSearchLoading, onInfiniteScroll } = this.props;
    return (
      <div>
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
}

Trending.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isSearchLoading: PropTypes.bool.isRequired,
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired
};

export default Trending;
