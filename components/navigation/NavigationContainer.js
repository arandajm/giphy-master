import { connect } from "react-redux";
import Navigation from "./Navigation";
import { push } from "react-router-redux";

// Create the pages array to use in the Navigation
const pages = [
  { path: "/", title: "Search" },
  { path: "/trending", title: "Trending" },
  { path: "/random", title: "Random" }
];

function mapStateToProps() {
  return {
    pages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigate: path => dispatch(push(path))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
