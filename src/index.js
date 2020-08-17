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

export default function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <Route path="/" exact>
          <Challenge6 />
        </Route>
        <Route path="/7" exact>
          <Challenge7 />
        </Route>
      </HashRouter>
    </BrowserRouter>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
