import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import "./menu.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

const naveItem = ["BUSH MEAT", "NIGERIAN", "TOP RATED", "CHEF CHOICE"];

const Menu7 = ({ dotButton, itemBg }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [select, setSelect] = useState(0);

  return (
    <div className="menu7">
      {/* show on phone devices */}
      <img src={logo} className="logo7" />

      {showMenu ? (
        <div className="drawerOnMobile">
          {naveItem.map((e, i) => (
            <button
              className={select == i ? "active" : "navButton"}
              onClick={() => {
                setSelect(i);
                setShowMenu(!showMenu);
              }}
            >
              {e}
            </button>
          ))}
        </div>
      ) : null}

      {/* dot show on mobile */}
      <div className="dotMobile">
        {naveItem.map((e, i) => (
          <div className={itemBg == i ? "borderDotActive" : "borderDot"}>
            <div className="dotM" onClick={() => dotButton(i)} />
          </div>
        ))}
      </div>

      {/* ** */}

      {/* show on desktop and tab */}
      {showMenu ? (
        <div className="nav">
          {naveItem.map((e, i) => (
            <button
              className={select == i ? "active" : "navButton"}
              onClick={() => setSelect(i)}
            >
              {e}
            </button>
          ))}
        </div>
      ) : null}

      {/* ** */}

      <button className="iconMenu" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <CloseOutlined style={{ fontSize: 20, color: "white" }} />
        ) : (
          <img src={menu} />
        )}
      </button>
    </div>
  );
};

export default Menu7;
