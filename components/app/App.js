import React from "react";
import NavigationContainer from "../navigation/NavigationContainer";
import styles from "./app.css";
// this component must use here at app level because it is used for 2 pages.s
import GiphyDisplay from "../giphy-display/GiphyDisplay";
import PropTypes from "prop-types";
import * as CustomTypes from "../../lib/custom-types";

const App = ({
  children,
  giphyDisplayIsShown,
  hideGiphyDisplay,
  giphyDisplayed
}) => (
  <div>
    <h1 className={styles.header}>Giphy Master</h1>
    <NavigationContainer />
    {children}
    <GiphyDisplay
      isShown={giphyDisplayIsShown}
      onClick={() => hideGiphyDisplay()}
      giphy={giphyDisplayed}
    />
  </div>
);

App.propTypes = {
  giphyDisplayIsShown: PropTypes.bool.isRequired,
  hideGiphyDisplay: PropTypes.func.isRequired,
  giphyDisplayed: CustomTypes.SearchResult
};

export default App;
