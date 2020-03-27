import { connect } from "react-redux";
import Search from "./Search";
import { newSearch, performSearch } from "../../../actions/search";

function mapStateToProps(state) {
  return {
    isSearchLoading: state.search.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmitted: searchTerm => {
      console.log("searchTerm in search container: " + searchTerm);
      dispatch(newSearch(searchTerm));
      dispatch(performSearch());
    },
    onInfiniteScroll: () => {
      dispatch(performSearch());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
