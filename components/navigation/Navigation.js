import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "../navigation-item/NavigationItem";

export default function Navigation({ pages, navigate }) {
  // Iterate into the pages and do the NavigationItem array
  const items = pages.map(({ title, path }, i) => {
    return (
      <NavigationItem key={i} path={path} onClick={navigate}>
        {title}
      </NavigationItem>
    );
  });

  return <div>{items}</div>;
}

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  navigate: PropTypes.func.isRequired
};
