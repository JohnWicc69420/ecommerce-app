import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Cart from "../Cart/Cart";

const Navbar = ({ cartItems, removeItem }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <div className="navContainer">
        <div className="left">
          <div className="product">
            <Link to="/products/men">Men</Link>
          </div>

          <div className="product">
            <Link to="/products/women">Women</Link>
          </div>

          <div className="product">
            <Link to="/products/sale">Sale</Link>
          </div>

          <div className="product">
            <Link to="/products/accessories">Accessories</Link>
          </div>
        </div>

        <div className="left-menu">
          <div className="arrow" onClick={handleMenu}>
            {openMenu ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          <div className={`${openMenu ? "open" : "closed"}`}>
            <div className="product" onClick={handleMenu}>
              <Link to="/products/men">Men</Link>
            </div>

            <div className="product">
              <Link to="/products/women" onClick={handleMenu}>
                Women
              </Link>
            </div>

            <div className="product">
              <Link to="/products/sale" onClick={handleMenu}>
                Sale
              </Link>
            </div>

            <div className="product">
              <Link to="/products/accessories" onClick={handleMenu}>
                Accessories
              </Link>
            </div>
          </div>
        </div>
        <div className="center">
          <Link to="/">
            <h1> LAMASTORE </h1>
          </Link>
        </div>
        <div className="right">
          <div>
            <Link to="/">Homepage</Link>
          </div>

          <div>
            <Link to="/">About</Link>
          </div>

          <div>
            <Link to="/">Contact</Link>
          </div>

          <div>
            <Link to="/">Stores</Link>
          </div>
          <div className="cartButton">
            <ShoppingCartOutlinedIcon
              onClick={handleOpenCart}
              className="icon"
            />
            <span onClick={handleOpenCart}>{cartItems.length}</span>
            {openCart && (
              <div className="cart">
                <Cart cartItems={cartItems} removeItem={removeItem} />
              </div>
            )}
          </div>
        </div>

        <div className="right-icons">
          <div>
            <Link to="/">
              <HomeOutlinedIcon className="icon" />
            </Link>
          </div>
          <div className="cartButton">
            <ShoppingCartOutlinedIcon
              onClick={handleOpenCart}
              className="icon"
            />
            <span onClick={handleOpenCart}>{cartItems.length}</span>
            {openCart && (
              <div className="cart">
                <Cart cartItems={cartItems} removeItem={removeItem} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
