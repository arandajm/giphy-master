import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";

export class InfiniteScroll extends Component {
  constructor(...args) {
    super(...args);
    // Create a container infinite scroll refence
    this.container = null;
    // Bind the scrollListener with the current instance of the class. (To use this into the function!!!)
    this.scrollListener = this.scrollListener.bind(this);
  }

  componentDidMount() {
    // Add the scroll event after the component is mounted into the dom
    document.addEventListener("scroll", this.scrollListener);
  }

  componentDidMount() {
    // remove the scroll event when the component is unmounted from the dom
    document.addEventListener("scroll", this.scrollListener);
  }

  scrollListener() {
    const { isLoading, onTrigger } = this.props;
    // Extract view port height
    const viewportHeight = document.documentElement.clientHeight;
    const { bottom } = this.container.getBoundingClientRect();

    if (!isLoading && bottom <= viewportHeight) {
      onTrigger();
    }
  }

  render() {
    // Extract children props that in this case is SearchResults component!
    const { children, isLoading } = this.props;
    return (
      <div ref={e => (this.container = e)}>
        {children}
        {isLoading && <Spinner />}
      </div>
    );
  }
}

export default InfiniteScroll;

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onTrigger: PropTypes.func.isRequired
};
