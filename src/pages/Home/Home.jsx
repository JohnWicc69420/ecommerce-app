import React from "react";
import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import Category from "../../components/Category/Category";
import Banner from "../../components/Banner/Banner";
import { data } from "../Products/Products";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const sliderData = [
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={sliderData[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderData[1]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderData[2]} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="featuredProducts">
        <FeaturedProducts data={data} />
      </div>

      <div className="Category">
        <Category />
      </div>

      <div className="trendingProducts">
        <TrendingProducts />
      </div>

      <div className="banner">
        <Banner />
      </div>
    </>
  );
};

export default Home;