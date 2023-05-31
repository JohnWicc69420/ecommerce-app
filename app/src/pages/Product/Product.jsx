import React from "react";
import "./Product.scss";
import { data } from "../Products/Products";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);

  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!";
  const addInfo =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!";
  const faq =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!";

  return (
    <>
      <div className="productContainer">
        <div className="left">
          <div className="images">
            <img src={item.img1} alt="" />
            <img src={item.img2} alt="" />
          </div>
          <div className="mainImage">
            <img src={item.img1} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="title">{item.name}</div>
          <div className="price">{item.newPrice}</div>
          <div className="desc">{item.desc}</div>
          <div className="quantity"></div>
          <div className="addToCart"></div>
          <div className="addButtons">
            <div className="addToWishlist"></div>
            <div className="addToCompare"></div>
          </div>
          <div className="type">{item.type}</div>
          <div className="description">{description}</div>
          <div className="addInfo">{addInfo}</div>
          <div className="faq">{faq}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
