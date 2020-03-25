import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "../navigation-item/NavigationItem";
import styles from "./navigation.css";

export default function Navigation({ pages, currentPath, navigate }) {
  // Iterate into the pages and do the NavigationItem array
  const items = pages.map(({ title, path }, i) => {
    return (
      <NavigationItem
        key={i}
        path={path}
        isCurrent={currentPath === path}
        onClick={navigate}
      >
        {title}
      </NavigationItem>
    );
  });

  return <div className={styles.container}>{items}</div>;
}

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};
