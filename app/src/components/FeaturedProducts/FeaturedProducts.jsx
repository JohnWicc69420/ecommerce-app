import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = () => {
  const data = [
    {
      id: "1",
      img1: "https://images.pexels.com/photos/1381565/pexels-photo-1381565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1381551/pexels-photo-1381551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldPrice: "29",
      newPrice: "19",
    },
    {
      id: "2",
      img1: "https://images.pexels.com/photos/2821106/pexels-photo-2821106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldPrice: "29",
      newPrice: "19",
    },
    {
      id: "3",
      img1: "https://images.pexels.com/photos/6533895/pexels-photo-6533895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/6533887/pexels-photo-6533887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldPrice: "29",
      newPrice: "19",
    },
    {
      id: "4",
      img1: "https://images.pexels.com/photos/4674399/pexels-photo-4674399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/4674404/pexels-photo-4674404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldPrice: "29",
      newPrice: "19",
    },
  ];

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
          {data.slice(0, 4).map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
