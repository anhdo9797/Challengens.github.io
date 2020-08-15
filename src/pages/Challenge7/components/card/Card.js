import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";

import "./card.scss";

const naveItem = ["BUSH MEAT", "NIGERIAN", "TOP RATED", "CHEF CHOICE"];

const Card7 = ({ src, label, title }) => {
  return (
    <div className="card7" style={{ backgroundImage: `url(${src})` }}>
      <div className="maskCover" />

      <div className="contentCard">
        <h4 className="labelC">{label} </h4>
        <p className="titleC">{title} </p>
        <p className="buttonC">
          Order Meal <RightOutlined />
        </p>
      </div>
    </div>
  );
};

export default Card7;
