import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = () => {
  return (
    <>
      <div className="fpContainer">
        <div className="top">
          <h1>Featured Products</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            dolor laudantium alias perspiciatis rem quo harum, praesentium
            facere quasi accusamus repellendus at labore. In nisi perferendis
            nulla voluptatem mollitia perspiciatis quos architecto magni tenetur
            ipsa non quis sapiente ducimus ab, cumque molestias, modi illo.
            Repudiandae dicta autem soluta debitis laboriosam!
          </p>
        </div>
        <div className="bottom">
          <Card />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
