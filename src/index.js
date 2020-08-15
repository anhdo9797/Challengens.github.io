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

export default function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <Challenge7 />
      </HashRouter>
    </BrowserRouter>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
