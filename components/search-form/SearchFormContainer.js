import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import { performSearch } from "../../actions/search";

//This component connect the redux store with the SearchForm component
function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmitted: searchTerm => dispatch(performSearch(searchTerm))
  };
}
export default connect(() => ({}), mapDispatchToProps)(SearchForm);
