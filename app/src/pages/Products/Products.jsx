import React from "react";
import "./Products.scss";

const Products = () => {
  return (
    <>
      <div className="productContainer">
        <div className="left">
          <div className="inputs">
            <h1>Product Catogories</h1>
            <div className="input">
              <input type="checkbox" id="hat" />
              <label htmlFor="hat">Hat</label>
            </div>
            <div className="input">
              <input type="checkbox" id="t-shirt" />
              <label htmlFor="t-shirt">T-shirt</label>
            </div>
          </div>

          <div className="filter">
            <h1>Filter by price</h1>
            <div className="input">
              <span>0</span>
              <input type="range" min="0" max="1000" step="1" id="range" />
              <span>1000</span>
            </div>
          </div>
          <div className="radio">
            <h1>Sort by</h1>
            <div className="input">
              <input type="radio" id="asc" />
              <label htmlFor="radio">Price (Lowest First)</label>
            </div>
            <div className="input">
              <input type="radio" id="des" />
              <label htmlFor="radio">Price (Highest First)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="catImg"></div>
          <div className="cards"></div>
        </div>
      </div>
    </>
  );
};

export default Products;
