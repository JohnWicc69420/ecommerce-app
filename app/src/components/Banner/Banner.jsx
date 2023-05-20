import "./Banner.scss";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Banner = () => {
  return (
    <>
      <div className="bannerContainer">
        <div className="left">
          <h1>be in touch with us:</h1>
        </div>
        <div className="center">
          <div className="input">
            <input type="text" placeholder="Enter your e-mail" />
            <button>Join us</button>
          </div>
        </div>
        <div className="right">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </>
  );
};

export default Banner;
