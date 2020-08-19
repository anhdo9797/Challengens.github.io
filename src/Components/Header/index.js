import React, { useState } from "react";
import logo from "../../assets/logo.png";
import {
  MenuFoldOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Drawer } from "antd";

import "./header.scss";
import { useHistory } from "react-router-dom";

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

  const navCLick = (e, i) => {
    history.push(e.pathName);
    setSelect(i);
  };

  return (
    <div className="header">
      <img src={logo} className="logo" />
      <div className="nav">
        {listMenu.map((e, i) => (
          <button
            onClick={() => navCLick(e, i)}
            className={select == i ? "active" : null}
          >
            {e.label}
          </button>
        ))}
      </div>
      <div className="avatarShop">
        <button onClick={() => history.push("/user")}>
          <Avatar size="large" icon={<UserOutlined />} />
        </button>
        <button>
          {/* item shopping */}
          <Badge count={5}>
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
      {/* <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        style={{ display: "flex", flexDirection: "column" }}
        className="drawer"
      >
        {listMenu.map((e, i) => (
          <button onClick={() => navCLick(e, i)} className={"itemDrawer"}>
            {e.label}
          </button>
        ))}
      </Drawer> */}
    </div>
  );
};
