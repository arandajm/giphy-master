import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import { searchPerformed } from "../../actions/search";

//This component connect the redux store with the SearchForm component
function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmitted: searchTerm => dispatch(searchPerformed(searchTerm))
  };
}
export default connect(() => ({}), mapDispatchToProps)(SearchForm);
