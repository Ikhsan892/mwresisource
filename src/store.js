import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
