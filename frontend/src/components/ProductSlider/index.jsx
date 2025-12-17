import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

const ProductSlider = (props) => {
  return (
    <section className="productSlider pt-2">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={props.items} spaceBetween={15}>
        <SwiperSlide className="!my-3"><ProductItem/></SwiperSlide>
        <SwiperSlide className="!my-3"><ProductItem/></SwiperSlide>
        <SwiperSlide className="!my-3"><ProductItem/></SwiperSlide>
        <SwiperSlide className="!my-3"><ProductItem/></SwiperSlide>
        <SwiperSlide className="!my-3"><ProductItem/></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductSlider;
