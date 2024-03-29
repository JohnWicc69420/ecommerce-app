import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <>
      <Link to={`/product/${item.id}`} className="link">
        <div className="cardContainer">
          <div className="images">
            <img className="img1" src={item.img1} alt="" loading="lazy" />
            <img className="img2" src={item.img2} alt="" loading="lazy" />
            {item.season ? <h1>{item.season}</h1> : null}
          </div>
          <h1>{item.name}</h1>
          <div className="prices">
            <h1 className="newPrice">${item.newPrice}</h1>
            <h1 className="oldPrice">${item.oldPrice}</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
