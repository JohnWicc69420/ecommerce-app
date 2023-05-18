import "./Category.scss";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="catContainer">
        <div className="col">
          <div className="row">
            <div className="img">
              <img
                src="https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg"
                alt=""
              />
              <div className="button">
                <button>
                  <Link>Sale</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img
                src="https://images.pexels.com/photos/2308883/pexels-photo-2308883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="button">
                <button>
                  <Link>Women</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="img">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="button">
                <button>
                  <Link>New Season</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="img">
                  <img
                    src="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg"
                    alt=""
                  />
                  <div className="button">
                    <button>
                      <Link>Men</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="img">
                  <img
                    src="https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="button">
                    <button>
                      <Link>Accessories</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="button">
                <button>
                  {" "}
                  <Link>Shoes</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
