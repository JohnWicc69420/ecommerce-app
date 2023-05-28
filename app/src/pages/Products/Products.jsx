import React from "react";
import "./Products.scss";
import Card from "../../components/Card/Card";

export const data = [
  {
    id: "1",
    img1: "https://images.pexels.com/photos/1381565/pexels-photo-1381565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1381551/pexels-photo-1381551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Long Sleeve Coat",
  },
  {
    id: "2",
    img1: "https://images.pexels.com/photos/2821106/pexels-photo-2821106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "69.99",
    newPrice: "49.99",
    name: "Winter Coat Orange",
  },
  {
    id: "3",
    img1: "https://images.pexels.com/photos/6533895/pexels-photo-6533895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/6533887/pexels-photo-6533887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Brown Coat",
  },
  {
    id: "4",
    img1: "https://images.pexels.com/photos/4674399/pexels-photo-4674399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/4674404/pexels-photo-4674404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "59.99",
    newPrice: "39.99",
    name: "Men's Jeans Jacket",
  },
  {
    id: "5",
    img1: "https://images.pexels.com/photos/1381565/pexels-photo-1381565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1381551/pexels-photo-1381551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Long Sleeve Coat",
  },
  {
    id: "6",
    img1: "https://images.pexels.com/photos/2821106/pexels-photo-2821106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "69.99",
    newPrice: "49.99",
    name: "Winter Coat Orange",
  },
  {
    id: "7",
    img1: "https://images.pexels.com/photos/6533895/pexels-photo-6533895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/6533887/pexels-photo-6533887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Brown Coat",
  },
  {
    id: "8",
    img1: "https://images.pexels.com/photos/4674399/pexels-photo-4674399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/4674404/pexels-photo-4674404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "59.99",
    newPrice: "39.99",
    name: "Men's Jeans Jacket",
  },
  {
    id: "9",
    img1: "https://images.pexels.com/photos/1381565/pexels-photo-1381565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1381551/pexels-photo-1381551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Long Sleeve Coat",
  },
  {
    id: "10",
    img1: "https://images.pexels.com/photos/2821106/pexels-photo-2821106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "69.99",
    newPrice: "49.99",
    name: "Winter Coat Orange",
  },
  {
    id: "11",
    img1: "https://images.pexels.com/photos/6533895/pexels-photo-6533895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/6533887/pexels-photo-6533887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Brown Coat",
  },
  {
    id: "12",
    img1: "https://images.pexels.com/photos/4674399/pexels-photo-4674399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/4674404/pexels-photo-4674404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "59.99",
    newPrice: "39.99",
    name: "Men's Jeans Jacket",
  },
  {
    id: "13",
    img1: "https://images.pexels.com/photos/1381565/pexels-photo-1381565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1381551/pexels-photo-1381551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Long Sleeve Coat",
  },
  {
    id: "14",
    img1: "https://images.pexels.com/photos/2821106/pexels-photo-2821106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "69.99",
    newPrice: "49.99",
    name: "Winter Coat Orange",
  },
  {
    id: "15",
    img1: "https://images.pexels.com/photos/6533895/pexels-photo-6533895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/6533887/pexels-photo-6533887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Brown Coat",
  },
  {
    id: "16",
    img1: "https://images.pexels.com/photos/4674399/pexels-photo-4674399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/4674404/pexels-photo-4674404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "59.99",
    newPrice: "39.99",
    name: "Men's Jeans Jacket",
  },
  {
    id: "17",
    img1: "https://images.pexels.com/photos/1381565/pexels-photo-1381565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1381551/pexels-photo-1381551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Long Sleeve Coat",
  },
  {
    id: "18",
    img1: "https://images.pexels.com/photos/2821106/pexels-photo-2821106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "69.99",
    newPrice: "49.99",
    name: "Winter Coat Orange",
  },
  {
    id: "19",
    img1: "https://images.pexels.com/photos/6533895/pexels-photo-6533895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/6533887/pexels-photo-6533887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Brown Coat",
  },
  {
    id: "20",
    img1: "https://images.pexels.com/photos/4674399/pexels-photo-4674399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/4674404/pexels-photo-4674404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "59.99",
    newPrice: "39.99",
    name: "Men's Jeans Jacket",
  },
];

const Products = () => {
  const ban = [
    {
      banImg:
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176694.jpg?w=1380&t=st=1685264562~exp=1685265162~hmac=57686b80bea2f3724572ca2a15a63c38dca3c6a033550991295d72757c5dd51a",
    },
  ];

  return (
    <>
      <div className="productsContainer">
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
          <div className="catImg">
            <img src={ban[0].banImg} alt="" />
          </div>
          <div className="cards">
            {data.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
