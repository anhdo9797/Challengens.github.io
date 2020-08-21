import React, { useState } from "react";

import "./find.scss";
import { banner, listButtonCategory } from "../../assets/findPage/index";
import Search from "../../Components/Input/Search";
import { dataProductFindPage } from "../../assets/findPage/Products";
import ItemProduct from "../../Components/Card/ItemProducts";
import { useDispatch, useSelector } from "react-redux";
import cartAction from "../../Store/AddToCart/action";

const Find = ({ props }) => {
  const [categoryId, setCategoryId] = useState(0);
  const [listProducts, setListProducts] = useState(dataProductFindPage);

  let dispatch = useDispatch(); //function mapDispatch
  let list = useSelector((state) => state.cart.listProducts);

  const addToCart = (product) => {
    dispatch(cartAction.addToCart(product));
    console.log("====================================");
    console.log(list);
    console.log("====================================");
  };

  const filterData = (category, i) => {
    //fill listData for category (lunch, break fast, ....)

    setCategoryId(i); //id category select => change background

    if (category != "") {
      let newArray = dataProductFindPage.filter(
        (e, i) => e.category === category
      );

      setListProducts(newArray);
    } else {
      setListProducts(dataProductFindPage);
    }
  };

  return (
    <div className="find">
      <img src={banner} alt="banner" className="banner" width={"100%"} />
      <div className="section">
        <h2 className="sectionLabel">OUT MEALS</h2>

        <Search />
      </div>
      <div className="wrapCategory">
        {listButtonCategory.map((e, i) => (
          <button
            onClick={() => filterData(e.id, i)}
            className="category"
            key={i}
            style={{
              backgroundColor: categoryId == i ? "#EF4C00" : "white",
              color: categoryId == i ? "white" : "black",
            }}
          >
            <img src={e.icon} width="20" />
            {e.label}
          </button>
        ))}
      </div>
      <div className="listProducts">
        {listProducts.slice(0, 3).map((e, i) => (
          <ItemProduct
            src={e.img}
            title={e.title}
            price={e.price}
            description={e.subTitle}
            addToCart={() => addToCart(e)}
          />
        ))}
      </div>

      <div className="section">
        <h2 className="sectionLabel">POPULAR</h2>
      </div>
      <div className="listProducts">
        {dataProductFindPage.slice(4, 7).map((e, i) => (
          <ItemProduct
            src={e.img}
            title={e.title}
            description={e.subTitle}
            price={e.price}
            addToCart={() => addToCart(e)}
          />
        ))}
      </div>
    </div>
  );
};

export default Find;
