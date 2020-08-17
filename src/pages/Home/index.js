import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import { MenuFoldOutlined } from "@ant-design/icons";

import "./home.scss";
import { HeaderHome } from "./components/Header";
import HotNews from "./components/Carousel/HotNews";

const Home = ({ props }) => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="home">
      <HeaderHome />
      <HotNews />
    </div>
  );
};

export default Home;
