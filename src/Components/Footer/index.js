import React, { useState } from "react";

import logo from "./assets/logo.png";

import "./footer.scss";

export const MyFooter = ({}) => {
  return (
    <div className="myFooter">
      <div className="wrapInformation">
        <img className="logo" src={logo} />
        <h2 className="title">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </h2>
      </div>
      <div className="link"></div>
      <div className="instagram">
        <h2 className="label">INSTAGRAM FEED</h2>
      </div>
    </div>
  );
};
