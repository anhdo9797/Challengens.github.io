import React from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import "./styles.scss";
import logo from "../../assets/logo.png";

const Header6 = ({ showMenu, onClick }) => {
  return (
    <div className="header6">
      <img src={logo} className="logo" />
      <div className="nav">
        <a className="active">WHAT WE DO</a>
        <a>RESEARCH</a>
        <a>EVENTS</a>
        <a>TAKE ACTION</a>
        <a>REPORTS</a>
      </div>
      <button className="headerButton">DONATE TO A CHILD</button>
      <button className="menuIcon" onClick={onClick}>
        {showMenu ? (
          <CloseOutlined
            style={{ fontSize: 19, color: "white", fontWeight: "bold" }}
          />
        ) : (
          <MenuOutlined
            style={{ fontSize: 19, color: "white", fontWeight: "bold" }}
          />
        )}
      </button>
      {showMenu ? (
        <div className="menu6">
          <a className='active'>WHAT WE DO</a>
          <a>RESEARCH</a>
          <a>EVENTS</a>
          <a>TAKE ACTION</a>
          <a>REPORTS</a>
          <button>DONATE TO A CHILD</button>
        </div>
      ) : null}
    </div>
  );
};

export default Header6;
