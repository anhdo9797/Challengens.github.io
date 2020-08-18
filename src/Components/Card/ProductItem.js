import { Card, Button } from "antd";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "./product.scss";

const ProductItem = ({ title, src, description }) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        paddingTop: 10,
        height: 400,
      }}
      cover={
        <img alt="example" src={src} style={{ width: "100%", height: "200" }} />
      }
      className="productItem"
    >
      <Meta title={title} description={description} />
      <div className="wrapPrice">
        <button className="addCard">
          <ShoppingCartOutlined /> Add to Card
        </button>
        <p className="price">$10 </p>
      </div>
    </Card>
  );
};

export default ProductItem;
