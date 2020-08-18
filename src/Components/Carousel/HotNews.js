import React, { useRef } from "react";
import { Carousel, Card, Button } from "antd";
import { RightOutlined, LeftOutlined, SearchOutlined } from "@ant-design/icons";
import banner1 from "../../assets/Untitled-1.png";
import banner2 from "../../assets/bn2.png";
import banner3 from "../../assets/bn3.png";

import "./HotNews.scss";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const listNews = [
  {
    src: banner1,
    content: "Sale Up 50% from 1/8/2020 to 4/8/2020",
  },
  {
    src: banner2,
    content: "Sale Up 30% from 2/8/2020 to 7/8/2020",
  },
  {
    src: banner3,
    content: "Sale Up 50% from 2/8/2020 to 5/8/2020",
  },
];

const HotNews = () => {
  const ref_carousel = useRef(null);
  return (
    <div className="hotNews">
      <Carousel effect="scroll" ref={ref_carousel} dots={false}>
        <div className="carouselItem">
          <img src={listNews[0].src} />
          <div className="content">
            <h1 className="contentType">{listNews[0].content} </h1>

            <button>Oder now</button>
          </div>
        </div>
        <div className="carouselItem">
          <img src={listNews[1].src} />
          <div className="content">
            <h1 className="contentType">{listNews[1].content} </h1>

            <button>Oder now</button>
          </div>
        </div>
        <div className="carouselItem">
          <img src={listNews[2].src} />
          <div className="content">
            <h1 className="contentType">{listNews[2].content} </h1>

            <button>Oder now</button>
          </div>
        </div>
      </Carousel>
      <button className="next" onClick={() => ref_carousel.current.next()}>
        <RightOutlined style={{ fontSize: 30, color: "#fff" }} />
      </button>
      <button className="back" onClick={() => ref_carousel.current.prev()}>
        <LeftOutlined style={{ fontSize: 30, color: "#fff" }} />
      </button>
    </div>
  );
};

export default HotNews;
