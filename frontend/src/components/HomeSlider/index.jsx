import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner from "../../assets/banner2.png";
import banner2 from '../../assets/banner.jpg'
import './style.css'

const HomeSlider = () => {
  return (
    <>
      <div className="homeSlider py-4 pb-2">
        <div className="container">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            className="sliderHome max-h-[500px]"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            loop={true}
          >
            <SwiperSlide className="w-full">
              <div className="item rounded-2xl overflow-hidden">
                <img
                  src={banner2}
                  alt="Banner Img"
                  className="w-full max-h-[450px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <div className="item rounded-2xl overflow-hidden">
                <img
                  src={banner}
                  alt="Banner Img"
                  className="w-full max-h-[450px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <div className="item rounded-2xl overflow-hidden">
                <img
                  src={banner2}
                  alt="Banner Img"
                  className="w-full max-h-[450px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <div className="item rounded-2xl overflow-hidden">
                <img
                  src={banner}
                  alt="Banner Img"
                  className="w-full max-h-[450px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <div className="item rounded-2xl overflow-hidden">
                <img
                  src={banner2}
                  alt="Banner Img"
                  className="w-full max-h-[450px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <div className="item rounded-2xl overflow-hidden">
                <img
                  src={banner}
                  alt="Banner Img"
                  className="w-full max-h-[450px]"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
