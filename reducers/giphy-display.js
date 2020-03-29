import {
  SHOW_GIPHY_DISPLAY,
  HIDE_GIPHY_DISPLAY
} from "../actions/giphy-display";

const initialState = {
  giphy: null,
  isShown: false
};

export default (state, action) => {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case SHOW_GIPHY_DISPLAY:
      return {
        ...state,
        giphy: action.giphy,
        isShown: true
      };
    case HIDE_GIPHY_DISPLAY:
      return {
        ...state,
        giphy: null,
        isShown: false
      };
    default:
      return state;
  }
};
