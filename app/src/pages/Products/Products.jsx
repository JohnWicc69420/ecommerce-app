import React from "react";
import { useState } from "react";
import "./Products.scss";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";

export const data = [
  {
    id: "1",
    img1: "/productImages/1id1.jpeg",
    img2: "/productImages/2id1.jpeg",
    oldPrice: 59.99,
    newPrice: 39.99,
    name: "Casual Men's Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    sale: true,
    popularity: "featured",
    cat: "men",
    season: "New Season",
  },
  {
    id: "2",
    img1: "/productImages/1id2.jpg",
    img2: "/productImages/2id2.jpeg",
    oldPrice: 59.99,
    newPrice: 39.99,
    name: "Men's Sweater",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "sweater",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    sale: true,
    popularity: "trending",
    cat: "men",
  },
  {
    id: "3",
    img1: "/productImages/1id3.jpg",
    img2: "/productImages/2id3.jpg",
    oldPrice: 54.99,
    newPrice: 34.99,
    name: "Men's T-Shirt Yellow",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "t-shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
    cat: "men",
    season: "New Season",
  },
  {
    id: "4",
    img1: "/productImages/1id4.jpeg",
    img2: "/productImages/2id4.jpeg",
    oldPrice: 79.99,
    newPrice: 59.99,
    name: "Long Sleeve Coat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "coat",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    sale: true,
    popularity: "featured",
    cat: "women",
    season: "New Season",
  },
  {
    id: "5",
    img1: "/productImages/1id5.jpeg",
    img2: "/productImages/2id5.jpeg",
    oldPrice: 69.99,
    newPrice: 49.99,
    name: "Winter Coat Orange",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "coat",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
    cat: "women",
  },
  {
    id: "6",
    img1: "/productImages/1id6.jpeg",
    img2: "/productImages/2id6.jpeg",
    oldPrice: 44.99,
    newPrice: 39.99,
    name: "Men's Footwear",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shoes",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    sale: true,
    popularity: "trending",
    cat: "shoes",
    season: "New Season",
  },
  {
    id: "7",
    img1: "/productImages/1id7.jpeg",
    img2: "/productImages/2id7.jpeg",
    oldPrice: 39.99,
    newPrice: 29.99,
    name: "Men's T-Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "t-shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
    cat: "men",
  },
  {
    id: "8",
    img1: "/productImages/1id8.avif",
    img2: "/productImages/2id8.avif",
    oldPrice: 44.99,
    newPrice: 39.99,
    name: "Women's Brown Bag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "bag",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    sale: true,
    popularity: "trending",
    cat: "accessories",
  },
  {
    id: "9",
    img1: "/productImages/1id9.jpeg",
    img2: "/productImages/2id9.jpeg",
    oldPrice: 59.99,
    newPrice: 39.99,
    name: "Men's Jeans Jacket",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "jacket",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
    cat: "men",
  },
  {
    id: "10",
    img1: "/productImages/1id10.avif",
    img2: "/productImages/2id10.avif",
    oldPrice: 34.99,
    newPrice: 29.99,
    name: "Men's Watch",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "watch",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    sale: true,
    popularity: "featured",
    cat: "accessories",
    season: "New Season",
  },
  {
    id: "11",
    img1: "/productImages/1id11.avif",
    img2: "/productImages/2id11.avif",
    oldPrice: 39.99,
    newPrice: 34.992,
    name: "Men's Shoes",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shoes",
    vendor: "Polo",
    tag: "Clothing, Fashion, Shoes",
    sale: true,
    popularity: "trending",
    cat: "shoes",
    season: "New Season",
  },
  {
    id: "12",
    img1: "/productImages/1id12.avif",
    img2: "/productImages/2id12.avif",
    oldPrice: 34.99,
    newPrice: 24.99,
    name: "Black Shirt ",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion",
    popularity: "featured",
    cat: "women",
  },
  {
    id: "13",
    img1: "/productImages/1id13.avif",
    img2: "/productImages/2id13.avif",
    oldPrice: 44.99,
    newPrice: 39.99,
    name: "Women's Bag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "bag",
    vendor: "Polo",
    tag: "Clothing, Fashion, Bag",
    sale: true,
    popularity: "trending",
    cat: "accessories",
    season: "New Season",
  },
  {
    id: "14",
    img1: "/productImages/1id14.jpg",
    img2: "/productImages/2id14.avif",
    oldPrice: 49.99,
    newPrice: 29.99,
    name: "Men's Casual Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
    cat: "men",
    season: "New Season",
  },
];

const Products = () => {
  const { catId } = useParams();
  const ban = [
    {
      banImg:
        "https://images.pexels.com/photos/3255155/pexels-photo-3255155.jpeg",
    },
  ];

  const [maxValue, setMaxValue] = useState(100);
  const [sortType, setSortType] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  let catData;

  if (catId === "sale") {
    catData = data.filter((item) => item.sale === true);
  } else if (catId === "new_arrivals") {
    catData = data.filter((item) => item.season === "New Season");
  } else {
    catData = data.filter((item) => item.cat === catId);
  }

  const priceFilteredData = catData?.filter(
    (item) => item.newPrice <= maxValue
  );

  const sortData = () => {
    if (sortType === "asc") {
      return priceFilteredData?.sort((a, b) => a.newPrice - b.newPrice);
    }
    if (sortType === "desc") {
      return priceFilteredData?.sort((a, b) => b.newPrice - a.newPrice);
    }
    return priceFilteredData;
  };

  const sortedData = sortData(); // category sorted

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSelectedCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  const uniqueTypes = [...new Set(catData.map((item) => item.type))];

  const checkboxFilteredData = Object.values(selectedCheckboxes).some(Boolean)
    ? sortedData?.filter((item) => {
        return selectedCheckboxes[item.type];
      })
    : sortedData;

  return (
    <>
      <div className="productsContainer">
        <div className="left">
          <div className="inputs">
            <h1>Product Catogories</h1>
            {uniqueTypes.map((type) => (
              <div className="input" key={type}>
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  checked={selectedCheckboxes[type] || false}
                  onChange={handleCheckboxChange}
                />
                <label className="typeLabel" htmlFor={type}>
                  {type}
                </label>
              </div>
            ))}
          </div>

          {console.log(selectedCheckboxes)}

          <div className="filter">
            <h1>Filter by price</h1>
            <div className="input">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={100}
                step="1"
                id="range"
                onChange={(e) => setMaxValue(e.target.value)}
              />
              <span>{maxValue}</span>
            </div>
          </div>
          <div className="radio">
            <h1>Sort by</h1>
            <div className="input">
              <input
                type="radio"
                id="asc"
                checked={sortType === "asc"}
                onChange={() => setSortType("asc")}
              />
              <label htmlFor="radio">Price (Lowest First)</label>
            </div>
            <div className="input">
              <input
                type="radio"
                id="des"
                checked={sortType === "desc"}
                onChange={() => setSortType("desc")}
              />
              <label htmlFor="radio">Price (Highest First)</label>
            </div>
          </div>
        </div>
        <div className="right right-icons">
          <div className="catImg">
            <img src={ban[0].banImg} alt="" loading="lazy" />
          </div>
          <div className="cards">
            {checkboxFilteredData?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
