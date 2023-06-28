import React, { useState } from "react";
import "./Product.scss";
import { data } from "../Products/Products";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import Cart from "../../components/Cart/Cart";

const Product = ({ addItem, cartItems }) => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);
  let [quan, setQuan] = useState(1);
  let [openDesc, setOpenDesc] = useState(false);
  let [openAddInfo, setOpenAddInfo] = useState(false);
  let [openFaq, setOpenFaq] = useState(false);

  const handleQuanDec = () => {
    quan >= 2 && setQuan(--quan);
  };

  const handleQuanInc = () => {
    setQuan(++quan);
  };

  const handleOpenDesc = () => {
    setOpenDesc(!openDesc);
  };

  const handleOpenAddInfo = () => {
    setOpenAddInfo(!openAddInfo);
  };

  const handleOpenFaq = () => {
    setOpenFaq(!openFaq);
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
            <div className="addToWishlist">
              <FavoriteBorderIcon />
              <span>Add to Wishlist</span>
            </div>
            <div className="addToCompare">
              <BalanceIcon />
              <span>Add to Compare</span>
            </div>
          </div>
          <div className="vendor">
            <span>Vendor: </span> {item.vendor}
          </div>
          <div className="type">
            <span>Product-Type: </span>
            {item.type}
          </div>
          <div className="tag">
            <span>Tag: </span>
            {item.tag}
          </div>
          <hr className="hr" />

          <div className="description">
            <span onClick={handleOpenDesc}>
              Description <hr />
            </span>
            {openDesc && description}
          </div>

          <div className="addInfo">
            <span onClick={handleOpenAddInfo}>
              Additional Information <hr />
            </span>
            {openAddInfo && addInfo}
          </div>
          <div className="faq">
            <span onClick={handleOpenFaq}>
              Faq <hr />
            </span>
            {openFaq && faq}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
