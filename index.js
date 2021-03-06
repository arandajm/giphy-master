// To apply all the polyfills to use generators in the browsers
import "babel-regenerator-runtime";
import React from "react";
// Allows to render react component into the dom!
import ReactDOM from "react-dom";
// react-redux gives the provider and the connect function. Connect allows to the component connect to the redux store. Provider is a component that suscribe to the redix store and allow to the connected component update it when the store is updated
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import AppContainer from "./components/app/AppContainer";
import mainReducer from "./reducers";
import { createLogger } from "redux-logger";
import searchSaga from "./sagas/search";
import randomSaga from "./sagas/random";
import createSagaMiddleware from "redux-saga";
import { Router, Route } from "react-router";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import SearchPageContainer from "./components/pages/search/SearchContainer";
import TrendingPageContainer from "./components/pages/trending/TrendingContainer";
import RandomPageContainer from "./components/pages/random/RandomContainer";

// create Saga Middleware
const sagas = createSagaMiddleware();
// Create a history to use in the routermiddleware
const history = createBrowserHistory();

// create a store. Parameters: Reducer (Main reducer) function and Middlewares
const store = createStore(
  mainReducer,
  applyMiddleware(routerMiddleware(history), createLogger(), sagas)
);

// Saga Running
sagas.run(searchSaga);
// Saga Running
sagas.run(randomSaga);

ReactDOM.render(
  //Wrap the app component into the Provider component with a store prop
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
        {/* Use the search page container */}
        <Route exact path="/" component={SearchPageContainer} />
        <Route exact path="/trending" component={TrendingPageContainer} />
        <Route exact path="/random" component={RandomPageContainer} />
      </AppContainer>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
