import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="left">
          <div className="img">
            <img
              src="https://w7.pngwing.com/pngs/60/776/png-transparent-flag-of-the-united-states-comparison-of-american-and-british-english-flag-of-the-united-kingdom-united-states.png"
              alt=""
            />
            <KeyboardArrowDownIcon />
          </div>

          <div className="img">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="product">
            <Link to="/products/men">Men</Link>
          </div>

          <div className="product">
            <Link to="/products/women">Women</Link>
          </div>

          <div className="product">
            <Link to="/products/children">Children</Link>
          </div>

          <div className="product">
            <Link to="/products/accessories">Accessories</Link>
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
            <Link to="/about">About</Link>
          </div>

          <div>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <Link to="/stores">Stores</Link>
          </div>
          <SearchIcon />
          <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </>
  );
};
export default Navbar;
