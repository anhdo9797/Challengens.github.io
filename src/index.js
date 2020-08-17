import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";
import "antd/dist/antd.css";

import Challenge6 from "./pages/Challenge6";
import Challenge7 from "./pages/Challenge7";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Authentication />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/6">
            <Challenge6 />
          </Route>
          <Route path="/7">
            <Challenge7 />
          </Route>
        </Switch>
      </HashRouter>
    </BrowserRouter>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
