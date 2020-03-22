import React from "react";
// Allows to render react component into the dom!
import ReactDOM from "react-dom";
// react-redux gives the provider and the connect function. Connect allows to the component connect to the redux store. Provider is a component that suscribe to the redix store and allow to the connected component update it when the store is updated
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import mainReducer from "./reducers";
import { searchSuccess } from "./actions/search";
import { createLogger } from "redux-logger";

// create a store. Parameters: Reducer (Main reducer) function and Middleware
const store = createStore(mainReducer, applyMiddleware(createLogger()));

const resultsInit = [
  {
    full:
      "https://media3.giphy.com/media/uw3fTCTNMbXAk/giphy.gif?cid=2d528ef0adf3d6a38f4f597a5fdc62375dcf496befbca2f2&rid=giphy.gif",
    thumbnail:
      "https://media3.giphy.com/media/uw3fTCTNMbXAk/100_s.gif?cid=2d528ef0adf3d6a38f4f597a5fdc62375dcf496befbca2f2&rid=100_s.gif"
  },
  {
    full:
      "https://media3.giphy.com/media/A8NNZlVuA1LoY/giphy.gif?cid=2d528ef0adf3d6a38f4f597a5fdc62375dcf496befbca2f2&rid=giphy.gif",
    thumbnail:
      "https://media3.giphy.com/media/A8NNZlVuA1LoY/100_s.gif?cid=2d528ef0adf3d6a38f4f597a5fdc62375dcf496befbca2f2&rid=100_s.gif"
  }
];

window.setTimeout(() => {
  store.dispatch(searchSuccess(resultsInit));
}, 2000);

ReactDOM.render(
  //Wrap the app component into the Provider component with a store prop
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
