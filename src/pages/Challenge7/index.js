import React, { useState } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import "./style.scss";
import Menu7 from "./components/Menu";
import Card7 from "./components/card/Card";

import logo from "./assets/logo.png";

import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";

import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";
import i4 from "./assets/i4.png";

const listData = [
  {
    background: bg1,
    igm: i1,
    title: "Explore from the chef's menu",
    labelCard: "Chef choice",
    titleCard: "Meat & Potatoes",
  },
  {
    background: bg2,
    igm: i2,
    title: "Enjoy Vegetable Delicacy",
    labelCard: "Top Rated",
    titleCard: "SwedishPotatoes",
  },
  {
    background: bg3,
    igm: i3,
    title: "Enjoy American Breakfast",
    labelCard: "New Menu",
    titleCard: "American Breakfast",
  },
  {
    background: bg4,
    igm: i4,
    title: "Explore from the chef's menu",
    labelCard: "Chef choice",
    titleCard: "Meat & Potatoes",
  },
];

const Challenge7 = () => {
  const [itemBg, setItemBg] = useState(0);
  const [itemNext, setItemNext] = useState(0);
  const [listCard, setListCard] = useState([1, 2, 3]);

  const nextButton = () => {
    let newArray = [];
    let length = listData.length;

    if (itemNext == length - 1) {
      setItemNext(0);
    } else {
      setItemNext(itemNext + 1);
    }

    if (itemNext + 3 <= length) {
      for (let index = itemNext; index < itemNext + 3; index++) {
        newArray.push(index);
      }
    } else {
      for (let index = itemNext; index < itemNext + 3; index++) {
        if (index == length) {
          newArray.push(0);
        } else if (index < length) {
          newArray.push(index);
        } else {
          newArray.push(index - 3);
        }
      }
    }

    setListCard(newArray);
  };

  const dotButton = (i) => {
    setItemBg(i);
  };

  return (
    <div className="challenge7">
      <div className="slider7">
        <img src={logo} className="logo7" alt="logo" />
        {listData.map((e, i) => (
          <div className={itemBg == i ? "borderDotActive" : "borderDot"}>
            <div className="dot" onClick={() => dotButton(i)} />
          </div>
        ))}
        <p className="textMenu">Menu</p>
      </div>
      <div
        className="content7"
        style={{ backgroundImage: `url(${listData[itemBg].background})` }}
      >
        <div className="maskCover" />

        <div className="outer">
          <Menu7 itemBg={itemBg} dotButton={dotButton} />
          <div className="wrapText">
            <div style={{ width: "100%" }}>
              <p className="label7">{listData[itemBg].title} </p>
              <p className="title7">Where food meets man</p>
            </div>
          </div>

          <div className="wrapMenuCard">
            <button className="inlineButton">Order Meal</button>
            <div style={{ display: "flex" }}>
              <div className="listCard">
                {/* phone => show 1 item, tab => 2 item, desktop full */}
                {listCard.map((e, i) => (
                  <div
                    className={
                      i == 1 ? "hiddenOnMobile" : i == 2 ? "hiddenOnTab" : null
                    }
                  >
                    <Card7
                      src={listData[e].background}
                      label={listData[e].labelCard}
                      title={listData[e].titleCard}
                    />
                  </div>
                ))}

                <button onClick={nextButton}>
                  <RightCircleOutlined
                    style={{ fontSize: 35, color: "#fff" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge7;
