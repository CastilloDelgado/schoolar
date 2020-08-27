import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
//import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(promise, thunk, logger))
);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

/*
ReactDOM.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
