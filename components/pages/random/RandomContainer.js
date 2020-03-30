import { connect } from "react-redux";
import { getRandomGiphy } from "../../../actions/random";
import { showGiphyDisplay } from "../../../actions/giphy-display";
import Random from "./Random";

function mapStateToProps(state) {
  return {
    giphy: state.random.giphy
  };
}

function mapDispatchToProps(dispatch) {
  return {
    thumbnailClicked: giphy => {
      dispatch(showGiphyDisplay(giphy));
    },
    getRandomGiphy: () => {
      dispatch(getRandomGiphy());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Random);
