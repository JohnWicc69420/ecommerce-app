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
    "/homeImages/img1.jpeg",
    "/homeImages/img2.jpg",
    "/homeImages/img3.jpeg",
  ];

  return (
    <>
      <div className="swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
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
        <TrendingProducts data={data} />
      </div>

      <div className="banner">
        <Banner />
      </div>
    </>
  );
};

export default Home;
