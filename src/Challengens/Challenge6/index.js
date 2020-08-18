import React, { useState } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import "./styles.scss";

import background from "./assets/bg.png";
import background2 from "./assets/bg2.png";
import i1 from "./assets/i1.png";
import i2 from "./assets/i3.png";

import Footer6 from "./components/Footer";
import Header6 from "./components/Header";

const listItem = [
  {
    src: i1,
    label: "Our Children",
    title:
      "With over 3,500 under our care we always aim in giving the best care, attention and love in creating the home atmosphere for our children",
    buttonType: "SEE OUR EVENTS",
  },
  {
    src: i2,
    label: "Scholarships",
    title:
      "Money raised from our bebefactors has been super amazing in us giving our children the most qualified educational institutions available.",
    buttonType: "SPONSOR A CHILD",
  },
];

const Challenge6 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [bg, setBg] = useState(false);

  return (
    <div className="challenge6">
      <img className="background" src={bg ? background2 : background} />
      <button className="back" onClick={() => setBg(!bg)}>
        {/* change background */}
        <LeftCircleOutlined style={{ fontSize: 25, color: "white" }} />
      </button>
      <button className="next" onClick={() => setBg(!bg)}>
        {/* change background */}
        <RightCircleOutlined style={{ fontSize: 25, color: "white" }} />
      </button>
      <div className="outer">
        <Header6 showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} />
        <div className="content">
          <p className="labelX">For Every Child's Happiness</p>
          <p className="title">
            At Zojie's foundation, our only focus is taking care of our
            children, seeing them grow to become the amazing human they want to
            be and see them also impact on the lives of their community.
          </p>
          <div className="wrapButton">
            <button className="headerButton">DONATE TO A CHILD</button>
            <button className="buttonOutline">MORE ABOUT US</button>
          </div>
        </div>
        <Footer6 />
      </div>
      <div className="wrapItem">
        {listItem.map((e, i) => (
          <div className="item" key={i}>
            <img src={e.src} />
            <div className="maskCover" />
            <div className="outer">
              <div className="content">
                <p className="labelF61">{e.label}</p>
                <p className="titleF61">{e.title}</p>
                <button className={i == 0 ? "yellow" : "white"}>
                  {e.buttonType}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="maskCover" />
    </div>
  );
};

export default Challenge6;
