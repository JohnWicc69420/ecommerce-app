import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg"
            alt=""
          />
          <Link className="link" to="/products/sale">
            <button>Sale</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2308883/pexels-photo-2308883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link to="/products/women" className="link">
            <button>Women</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/8400603/pexels-photo-8400603.jpeg"
            alt=""
          />
          <Link to="/products/new-season" className="link">
            <button>New Season</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg"
                alt=""
              />
              <Link to="/products/Men" className="link">
                <button>Men</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <Link to="/products/accessories" className="link">
                <button>Accessories</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link to="/products/shoes" className="link">
            <button>Shoes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
