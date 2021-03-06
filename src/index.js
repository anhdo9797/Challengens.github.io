import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "antd/dist/antd.css";

import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import { HeaderHome } from "./Components/Header";

import "./main.scss";
import { Provider } from "react-redux";
import store from "./Store/store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter
      // basename={"/Challengens.github.io/dist"}
      >
        {/* get ulr public + url router */}
        <div className="main">
          {/* <HeaderHome />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/find" component={Find} />
            <Route path="/menu" component={Menu} />
            <Route path="/contact" component={Contact} />

            <Route path="/user" component={Authentication} />
          </Switch> */}

          <Authentication />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
