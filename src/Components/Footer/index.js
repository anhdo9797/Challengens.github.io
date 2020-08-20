import React, { useState } from "react";

import logo from "./assets/logo.png";
import in1 from "./assets/in1.png";
import in2 from "./assets/in2.png";
import in3 from "./assets/in3.png";
import in4 from "./assets/in4.png";
import in5 from "./assets/in5.png";
import in6 from "./assets/in6.png";
import "./footer.scss";

const usefulLinkLeft = [
  { title: "About" },
  { title: "Menu" },
  { title: "Testimonials" },
  { title: "Contact Us" },
];
const usefulLinkRight = [
  { title: "Wishlist" },
  { title: "Privacy Policy" },
  { title: "Order Tracking" },
  { title: "Warranty and Services" },
];

const listImageInstagram = [in1, in2, in3, in4, in5, in6];

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
      <div className="link">
        <h3 className="labelFooter">USEFUL LINKS</h3>
        <div className="lineText" />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="wrapLink">
            {usefulLinkLeft.map((e, i) => (
              <a key={i}>{e.title} </a>
            ))}
          </div>
          <div className="wrapLink">
            {usefulLinkRight.map((e, i) => (
              <a key={i}>{e.title} </a>
            ))}
          </div>
        </div>
      </div>
      <div className="instagram">
        <h3 className="labelFooter">INSTAGRAM FEED</h3>
        <div className="lineText" />

        <div className="wrapImage">
          {listImageInstagram.map((e, i) => (
            <button>
              <img src={e} key={i} className="imageInstagram" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
