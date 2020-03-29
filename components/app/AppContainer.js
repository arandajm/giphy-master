import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "./App";
import { hideGiphyDisplay } from "../../actions/giphy-display";

function mapStateToProps(state) {
  return {
    giphyDisplayIsShown: state.giphyDisplay.isShown,
    giphyDisplayed: state.giphyDisplay.giphy
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideGiphyDisplay: () => dispatch(hideGiphyDisplay())
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
