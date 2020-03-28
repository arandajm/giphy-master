import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as CustomTypes from "../../lib/custom-types";
import styles from "./giphy-display.css";

export default function GiphyDisplay({ isShown, giphy, onClick }) {
  // Generate container classnames using classnames module
  const containerClassNames = classNames(styles.container, {
    [styles.isShown]: isShown
  });

  return (
    <div onClick={onClick} className={containerClassNames}>
      <img className={styles.image} src={giphy.full} />
    </div>
  );
}

GiphyDisplay.propTypes = {
  isShown: PropTypes.bool.isRequired,
  giphy: CustomTypes.SearchResult.isRequired,
  onClick: PropTypes.func.isRequired
};
