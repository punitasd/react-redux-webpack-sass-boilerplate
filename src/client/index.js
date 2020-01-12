import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.jsx";
import { createHashHistory } from "history";

const history = createHashHistory({
  basname: "",
  hashType: "slash"
});

import { Router, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);
