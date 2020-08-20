import React from "react";
import Slider from "react-slick";

import HotNews from "../../Components/Carousel/HotNews";
import Category from "../../Components/Card/Category";
import { MyFooter } from "../../Components/Footer";
import ProductItem from "../../Components/Card/ProductItem";

import line from "../../assets/line.png";
import banner from "./assets/banner.png";
import banner2 from "./assets/banner2.png";
import review from "./assets/review.png";
import quotes from "./assets/quotes.png";

import "./home.scss";
import { listCategory, listProducts } from "./list";
import SwipeToSlide from "../../Components/Swipe";
import { Row, Col, Carousel } from "antd";
import { listImageDescription } from "./assets/description";

const Home = ({ props }) => {
  return (
    <div className="home">
      <HotNews />
      <h2 className="selectType">Want to eat ?</h2>

      <img src={line} width="377" style={{ alignSelf: "center" }} />
      <h3 className="sloganType">
        Try our Most Delicious food and it usually take minutes to deliver!
      </h3>
      <div className="wrapMenuItem">
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
      <div className="testimonials">
        <img src={review} className="imageTestimonials" />
        <div className="quotes">
          <img src={quotes} width="60" />
          <h2>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </h2>
          <div className="name">
            <p>Nina Margaret</p>
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="description">
        {listImageDescription.map((e, i) => (
          <img src={e} width="250" style={{ transition: "0.5s" }} />
        ))}
      </div>

      <MyFooter />
    </div>
  );
};

export default Home;
