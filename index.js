import React from "react";
// Allows to render react component into the dom!
import ReactDOM from "react-dom";
// react-redux gives the provider and the connect function. Connect allows to the component connect to the redux store. Provider is a component that suscribe to the redix store and allow to the connected component update it when the store is updated
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";

// create a store. Parameters: Reducer function and Middleware
const store = createStore(() => ({}));

ReactDOM.render(
  //Wrap the app component into the Provider component with a store prop
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
