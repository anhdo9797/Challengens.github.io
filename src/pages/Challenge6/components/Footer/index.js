import React, { useState } from "react";
import {
  MenuOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";

import "./footer.scss";

const listContentF6 = [
  { label: "3, 520", title: "Children Touched" },
  { label: "5 Years", title: "Years Running" },
  { label: "N800k", title: "Amount Raised" },
  { label: "52", title: "Orphanage Homes" },
  { label: "13 States", title: "Cities Touched" },
];

const Footer6 = () => {
  const [changeList, setChangeList] = useState(true);
  const [itemPhone, setItemP] = useState([0, 1, 2]);
  const [start, setStart] = useState(0);

  const next = () => {
    let newArray = [];
    let length = listContentF6.length;

    if (start == length) {
      setStart(0);
    } else {
      setStart(start + 1);
    }

    for (let index = start; index < start + 3; index++) {
      if (index == length + 1) {
        newArray.push(1);
      } else if (index == length) {
        newArray.push(0);
      } else {
        newArray.push(index);
      }
      console.log(index);
    }

    setItemP(newArray);

    console.log("setItemP", itemPhone);
    console.log(newArray);
    console.log(start);
  };
  const back = () => {
    let newArray = [];
    let length = listContentF6.length;

    if (start == 0) {
      setStart(length);
    } else {
      setStart(start - 1);
    }

    for (let index = start; index < start + 3; index++) {
      if (index <= length) {
        newArray.push(index);
      } else if (index == length + 1) {
        newArray.push(0);
      } else {
        newArray.push(1);
      }
      console.log(index);
    }

    setItemP(newArray);

    console.log("setItemP", itemPhone);
    console.log(newArray);
    console.log(start);
  };

  const checkItem = (i) => {
    for (let index = 0; index < itemPhone.length; index++) {
      if (itemPhone[index] == i) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="footer6">
      <button onClick={back}>
        <LeftCircleOutlined style={{ color: "white", fontSize: 20 }} />
      </button>
      {listContentF6.map((e, i) => {
        return (
          <div
            className={checkItem(i) ? "wrapTitleF6" : "hiddenMobile"}
            key={i}
          >
            <p className="labelF6">{e.label} </p>
            <p className="titleF6">{e.title}</p>
          </div>
        );
      })}

      <button onClick={next}>
        <RightCircleOutlined style={{ color: "white", fontSize: 20 }} />
      </button>
    </div>
  );
};

export default Footer6;
