import React from "react";
import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <>
      <div className="swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={data[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={data[1]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={data[2]} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="featuredProducts">
        <FeaturedProducts />
      </div>

      <div className="trendingProducts">
        <TrendingProducts />
      </div>
    </>
  );
};

export default Home;
