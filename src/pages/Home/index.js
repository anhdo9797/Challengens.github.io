import React from "react";

import "./home.scss";
import HotNews from "../../Components/Carousel/HotNews";
import Category from "../../Components/Card/Category";

import { listCategory, listProducts } from "./list";
import ProductItem from "../../Components/Card/ProductItem";

import line from "../../assets/line.png";
import banner from "./assets/banner.png";
import banner2 from "./assets/banner2.png";
import { MyFooter } from "../../Components/Footer";

const Home = ({ props }) => {
  return (
    <div className="home">
      <HotNews />
      <h2 className="selectType">Want to eat ?</h2>

      <img src={line} width="377" style={{ alignSelf: "center" }} />
      <h3 className="sloganType">
        Try our Most Delicious food and it usually take minutes to deliver!
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {listCategory.map((e, i) => (
          <Category title={e.title} src={e.src} key={i} />
        ))}
      </div>

      <img src={banner} className="banner" />
      <h2 className="selectType">Our Most Popular Recipes</h2>
      <img src={line} width="377" style={{ alignSelf: "center" }} />
      <h3 className="sloganType">
        Try our Most Delicious food and it usually take minutes to deliver!
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {listProducts.map((e, i) => (
          <ProductItem
            src={e.src}
            key={i}
            title={e.label}
            description={e.title}
          />
        ))}
      </div>

      <button className="showMenu">Show Our Menu</button>

      <img src={banner2} className="banner" />
      <h2 className="selectType">Client Testimonials</h2>
      <img src={line} width="377" style={{ alignSelf: "center" }} />
      <h3 className="sloganType">
        Try our Most Delicious food and it usually take minutes to deliver!
      </h3>

      {/* <MyFooter /> */}
    </div>
  );
};

export default Home;
