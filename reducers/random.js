import {
  GET_RANDOM_GIPHY,
  GET_RANDOM_GIPHY_ERROR,
  GET_RANDOM_GIPHY_SUCCESS
} from "../actions/random";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
  ghipy: undefined
};

function randomResultTransformer(element) {
  const { images } = element;
  return {
    thumbnail: images.fixed_width_downsampled
      ? images.fixed_width_downsampled.url
      : null,
    full: images.original ? images.original.url : null
  };
}

export default (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case GET_RANDOM_GIPHY_SUCCESS:
      return {
        ...state,
        giphy: randomResultTransformer(action.giphy)
      };
    case LOCATION_CHANGE:
      // When the location change (change the page), return the initial state to reset the values
      return initialState;
    default:
      return state;
  }
};
