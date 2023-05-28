import React from "react";
import "./Product.scss";
// import { data } from "../Products/Products";

const Product = ({ data }) => {
  return (
    <>
      <div className="productContainer">
        <div className="left">
          <div className="images"></div>
          <div className="mainImage"></div>
        </div>
        <div className="right">
          <div className="title"></div>
          <div className="price"></div>
          <div className="desc"></div>
          <div className="quantity"></div>
          <div className="addToCart"></div>
          <div className="addButtons"></div>
          <div className="type"></div>
          <div className="description"></div>
          <div className="addInfo"></div>
          <div className="faq"></div>
        </div>
      </div>
    </>
  );
};

export default Product;
