import React, { useState } from "react";
import "./Product.scss";
import { data } from "../Products/Products";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);
  let [quan, setQuan] = useState(1);

  const handleQuanDec = () => {
    quan >= 1 && setQuan(--quan);
  };

  const handleQuanInc = () => {
    setQuan(++quan);
  };

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
          <div className="price">${item.newPrice}</div>
          <div className="desc">{item.desc}</div>
          <div className="quantity">
            <div className="dec" onClick={handleQuanDec}>
              -
            </div>
            <span>{quan}</span>
            <div className="inc" onClick={handleQuanInc}>
              +
            </div>
          </div>
          <div className="addToCart">
            <span>
              <AddShoppingCartIcon fontSize="small" />
            </span>
            <span>Add to cart</span>
          </div>
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
