import PropTypes from "prop-types";

// Un objeto que tenga determinada estructura
export const SearchResult = PropTypes.shape({
  thumbnail: PropTypes.string.isRequired,
  full: PropTypes.string.isRequired
});
