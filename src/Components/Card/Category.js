import { Card } from "antd";
import React from "react";

const Category = ({ title, src }) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{
        width: 125,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 10,
      }}
      cover={
        <img
          alt="example"
          src={src}
          style={{ width: "60px", height: "80px" }}
        />
      }
    >
      <Meta title={title} />
    </Card>
  );
};

export default Category;
