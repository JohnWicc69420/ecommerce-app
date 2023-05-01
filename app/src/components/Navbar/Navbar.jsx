import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="img">
            <img src="https://w7.pngwing.com/pngs/60/776/png-transparent-flag-of-the-united-states-comparison-of-american-and-british-english-flag-of-the-united-kingdom-united-states.png" alt="" />
            <KeyboardArrowDownIcon />

            <div className="img">
            <span>USD</span>
            <KeyboardArrowDownIcon />

            
          </div>

 
          </div>

          
        
        </div>
        <div className="center">
         <h1> ZESAY </h1>
        </div>
        <div className="right">
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
