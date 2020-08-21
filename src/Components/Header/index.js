import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MenuFoldOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Drawer } from "antd";

import "./header.scss";
import logo from "../../assets/logo.png";

const listMenu = [
  {
    label: "Home",
    pathName: "/",
  },
  {
    label: "Find",
    pathName: "/find",
  },
  {
    label: "Menu",
    pathName: "/menu",
  },

  {
    label: "Contact",
    pathName: "/contacts",
  },
];

export const HeaderHome = ({ match }) => {
  const [select, setSelect] = useState(0);
  const [visible, setVisible] = useState(false);

  let history = useHistory();

  //redux
  let productsQuantity = useSelector((state) => state.cart.listProducts.length);

  const navCLick = (e, i) => {
    history.push(e.pathName);
    setVisible(false);
    setSelect(i);
  };

  return (
    <div className="header">
      <img src={logo} className="logo" />
      <div className="nav">
        {listMenu.map((e, i) => (
          <NavLink
            activeStyle={{
              borderBottom: "3px solid #ff9300",
              color: "#ff9300",
            }}
            to={e.pathName}
            key={i}
            className="navLink"
          >
            {e.label}
          </NavLink>
        ))}
      </div>
      <div className="avatarShop">
        <NavLink
          activeStyle={{
            borderBottom: "3px solid #ff9300",
            color: "#ff9300",
          }}
          to="/user"
          className="navLink"
        >
          <Avatar size="large" icon={<UserOutlined />} />
        </NavLink>

        <button>
          {/* item shopping */}
          <Badge count={productsQuantity}>
            <ShoppingCartOutlined
              style={{ fontSize: 30, color: "grey", marginLeft: 30 }}
            />
          </Badge>
        </button>
      </div>
      <div className="menuPhone">
        <button onClick={() => setVisible(true)}>
          <MenuFoldOutlined style={{ fontSize: 30, color: "grey" }} />
        </button>
      </div>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        style={{ display: "flex", flexDirection: "column" }}
        className="drawer"
      >
        {listMenu.map((e, i) => (
          <button
            onClick={() => navCLick(e, i)}
            className={select == i ? "active" : "itemDrawer"}
          >
            {e.label}
          </button>
        ))}
      </Drawer>
    </div>
  );
};
