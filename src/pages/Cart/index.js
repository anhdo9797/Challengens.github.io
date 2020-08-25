import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { RestOutlined } from "@ant-design/icons";
import "./cart.scss";
import { Avatar, Divider, Empty, List } from "antd";
import cartAction from "../../Store/AddToCart/action";

const Cart = (props) => {
  const listProducts = useSelector((state) => state.cart.listProducts);
  let dispatch = useDispatch();

  const getTotal = () => {
    if (listProducts) {
      let total = 0;
      listProducts.forEach((element) => {
        total = total + element.price;
      });
      return total;
    }
    return 0;
  };

  const removeProduct = (id) => {
    console.log(id);
    dispatch(cartAction.removeProduct(id));
  };

  return (
    <div className="cart">
      <List
        dataSource={listProducts}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={<Avatar shape="square" size={90} src={item.img} />}
              title={<h2>{item.title}</h2>}
              description={<h2 style={{ color: "#a80e0e" }}>$ {item.price}</h2>}
            />

            <button onClick={() => removeProduct(item.title)}>
              <RestOutlined className="clear" style={{ fontSize: 30 }} />
            </button>
          </List.Item>
        )}
      />
      {listProducts.length > 0 ? (
        <div className="total">
          <h2 style={{ fontSize: 30, margin: 0 }}>TOTAL: ${getTotal()} </h2>
          <button className="pay">Payment now</button>
        </div>
      ) : null}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
