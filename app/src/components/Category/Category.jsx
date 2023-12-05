import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row item">
          <img src="/catImages/sale.jpg" loading="lazy" alt="" />
          <button>
            <Link className="link" to="/products/sale">
              Sale
            </Link>
          </button>
        </div>
        <div className="row item">
          <img src="/catImages/women.jpeg" alt="" loading="lazy" />
          <button>
            <Link to="/products/women" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row item">
          {" "}
          <img src="/catImages/newSeason.jpg" alt="" loading="lazy" />
          <button>
            <Link to="/products/new_arrivals" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row item">
              <img src="/catImages/men.jpg" alt="" loading="lazy" />
              <button>
                <Link to="/products/men" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row item">
              {" "}
              <img src="/catImages/accessories.jpeg" alt="" loading="lazy" />
              <button>
                <Link to="/products/accessories" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row item">
          <img src="/catImages/shoes.jpeg" alt="" loading="lazy" />
          <button>
            <Link to="/products/shoes" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
