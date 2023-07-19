import React from "react";
import { useState } from "react";
import "./Products.scss";
import Card from "../../components/Card/Card";

export const data = [
  {
    id: "1",
    img1: "https://img.freepik.com/free-photo/portrait-young-candid-man-student-boy-with-clean-face-relaxed-facial-expression-casual-smile-checked-shirt-t-shirt-summer-outfit-look-white-background_176420-45901.jpg?w=1380&t=st=1689515731~exp=1689516331~hmac=d05c66195c6684c6a1162ed80a88bafb652b57936c612c10e5f06d22ad66cd91",
    img2: "https://img.freepik.com/free-photo/thank-you-smiling-young-man-nod-grateful-holds-hands-pray-beg-gesture-appreciate-something-express-gratitude-standing-white_176420-40249.jpg?w=1380&t=st=1689515802~exp=1689516402~hmac=dfb56ecc76138a9fe25e6f7b5b2416fdc3db32eb242faf0d25785858f2fd97d4",
    oldPrice: 59.99,
    newPrice: 39.99,
    name: "Casual Men's Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "Shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
  },
  {
    id: "2",
    img1: "https://images.pexels.com/photos/6533895/pexels-photo-6533895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/6533887/pexels-photo-6533887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Brown Coat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "Coat",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
  },
  {
    id: "3",
    img1: "https://img.freepik.com/free-photo/cheerful-young-blue-eyed-man-with-dark-hair-posing-studio-with-happy-smile-handsome-fit-man-dressed-casually-smiling-joyfully-showing-his-white-straight-teeth-positive-emotions-concept_176420-13238.jpg?w=1380&t=st=1689515570~exp=1689516170~hmac=006a2d0da2fd3e0608ef2b94a8fc87791232af475358210f5f4e1926ea03eb46",
    img2: "https://img.freepik.com/free-photo/portrait-serious-handsome-man-with-appealing-expression-keeps-arms-folded-tries-be-strict-muscular-fit-stylish-male-student-being-dissatisfied-with-final-mark-demands-retake-exam_176420-13251.jpg?w=1380&t=st=1689515607~exp=1689516207~hmac=8cdb8dac2a691834c5c8a0ecb82ba8a67bfabd12d9bd0df71573833c6b850f94",
    oldPrice: 44.99,
    newPrice: 29.99,
    name: "Long Sleeve Men's Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "Shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
  },
  {
    id: "4",
    img1: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1689515079~exp=1689515679~hmac=ef1fa5aeac0f255fd2114aa9bce9645c3ac3c762114ddccd9afec1b055ad73bf",
    img2: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4919.jpg?w=1060&t=st=1689515121~exp=1689515721~hmac=1e1e20b10ee0bd9fd1d530da1801b8a185ea2b990fcf2c31b1bd69a5a233753b",
    oldPrice: 54.99,
    newPrice: 34.99,
    name: "Men's Casual Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "Shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
  },

  {
    id: "5",
    img1: "https://images.pexels.com/photos/1381565/pexels-photo-1381565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1381551/pexels-photo-1381551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "79.99",
    newPrice: "59.99",
    name: "Long Sleeve Coat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "Coat",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
  },

  {
    id: "6",
    img1: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg",
    img2: "https://images.pexels.com/photos/7010503/pexels-photo-7010503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: 59.99,
    newPrice: 39.99,
    name: "Men's Sweater",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "Sweater",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
  },
  {
    id: "7",
    img1: "https://img.freepik.com/free-photo/portrait-goodlooking-attractive-stylish-bearded-man-brown_285396-4606.jpg?w=1380&t=st=1689514776~exp=1689515376~hmac=678340cbc26452df5b439c08f99bf92b62de5fc50a4f126548502951b99270bd",
    img2: "https://img.freepik.com/free-photo/portrait-handsome-stylish-bearded-man-brown_285396-4583.jpg?w=1380&t=st=1689514833~exp=1689515433~hmac=bf7134464a73e52781216bf65eebf5be000faf32e17bd38230c587858506bd2a",
    oldPrice: 49.99,
    newPrice: 29.99,
    name: "Men's Casual Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "Shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
  },
  {
    id: "8",
    img1: "https://images.pexels.com/photos/2821106/pexels-photo-2821106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "69.99",
    newPrice: "49.99",
    name: "Winter Coat Orange",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "Coat",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
  },
  {
    id: "9",
    img1: "https://img.freepik.com/free-photo/young-stylish-guy-posing_176420-29907.jpg?w=1380&t=st=1689514873~exp=1689515473~hmac=500bc84dd7d2f1333f3f9a24064d4371425b1f6a3dc0982e5fa7901fa5f8f182",
    img2: "https://img.freepik.com/free-photo/friendly-young-guy-posing_176420-29911.jpg?w=1380&t=st=1689515201~exp=1689515801~hmac=713feea5150ee88b2b8db41d87e1d00a40459120cda2e21c0841a8f2dd8afb2a",
    oldPrice: 49.99,
    newPrice: 29.99,
    name: "Men's Casual Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "Shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
  },
  {
    id: "10",
    img1: "https://images.pexels.com/photos/4674399/pexels-photo-4674399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/4674404/pexels-photo-4674404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldPrice: "59.99",
    newPrice: "39.99",
    name: "Men's Jeans Jacket",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex impedit velit facilis blanditiis pariatur nobis voluptatum necessitatibus hic atque. Quos veritatis accusantium optio odit, saepe assumenda quod quis necessitatibus!",
    type: "Jacket",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
  },
  {
    id: "11",
    img1: "https://img.freepik.com/free-photo/young-smiling-man-standing-white-wall_176420-18835.jpg?w=1380&t=st=1689515342~exp=1689515942~hmac=020381408aef730de4cae2d9714de9ca61a517a22726a2798115b3ef2a42460b",
    img2: "https://img.freepik.com/free-photo/handsome-cheerful-man-extend-hand-handshake_176420-18847.jpg?w=1380&t=st=1689515312~exp=1689515912~hmac=efd6b137a4cd2275eee3c25ec048dd4a3f844803142e5d49cccc567ff54d93d2",
    oldPrice: 69.99,
    newPrice: 49.99,
    name: "Men's Jeans Jacket",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "Jacket",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "trending",
  },
  {
    id: "12",
    img1: "https://img.freepik.com/free-photo/portrait-young-handsome-man-grey_144627-64073.jpg?w=1380&t=st=1689515432~exp=1689516032~hmac=b3f8836507db3dff78a12a22b575fafed9c9d4c654b81d21331f0d73afd06fa2",
    img2: "https://img.freepik.com/free-photo/portrait-young-guy-grey_144627-64065.jpg?w=1380&t=st=1689515470~exp=1689516070~hmac=a1ab34577b8d43a69d2483c47cb182bcc3a00c2fdfec6fdb7a75fc18f04415cb",
    oldPrice: 39.99,
    newPrice: 29.99,
    name: "Men's T-Shirt",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit maiores repellendus consequuntur inventore",
    type: "T-Shirt",
    vendor: "Polo",
    tag: "Clothing, Fashion, Top",
    popularity: "featured",
  },
];

const Products = () => {
  const ban = [
    {
      banImg:
        "https://images.pexels.com/photos/3255155/pexels-photo-3255155.jpeg",
    },
  ];

  const [maxValue, setMaxValue] = useState(1000);
  const [sortType, setSortType] = useState("");
  const [checkedTypes, setCheckedTypes] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedTypes((prevTypes) => [...prevTypes, value]);
    } else {
      setCheckedTypes((prevTypes) =>
        prevTypes.filter((type) => type !== value)
      );
    }
  };

  const sortData = () => {
    if (sortType === "asc") {
      return data.sort((a, b) => a.newPrice - b.newPrice);
    }
    if (sortType === "desc") {
      return data.sort((a, b) => b.newPrice - a.newPrice);
    }
    return data;
  };

  const sortedData = sortData();

  const priceFilteredData = sortedData.filter(
    (item) => item.newPrice <= maxValue
  );

  return (
    <>
      <div className="productsContainer">
        <div className="left">
          <div className="inputs">
            <h1>Product Catogories</h1>
            <div className="input">
              <input type="checkbox" id="hat" />
              <label htmlFor="hat">Jacket</label>
            </div>
            <div className="input">
              <input type="checkbox" id="t-shirt" />
              <label htmlFor="t-shirt">Coat</label>
            </div>
          </div>

          <div className="filter">
            <h1>Filter by price</h1>
            <div className="input">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
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
            <img src={ban[0].banImg} alt="" />
          </div>
          <div className="cards">
            {priceFilteredData?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
