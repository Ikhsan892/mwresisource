import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
const App = lazy(() => import("./App"));
ReactDOM.render(
  <div>
    <Suspense
      fallback={
        <div>
          <LinearProgress />
        </div>
      }>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
