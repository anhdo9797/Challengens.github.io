import React from "react";
import logo from "../../assets/logo.png";
import { MenuFoldOutlined } from "@ant-design/icons";

import "./header.scss";

export const HeaderHome = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" />
      <div className="nav">
        <a>Home</a>
        <a>Products </a>
        <a>Blogs </a>
        <a>Contact</a>
      </div>
      <div className="menuPhone">
        <button>
          <MenuFoldOutlined />
        </button>
      </div>
    </div>
  );
};
