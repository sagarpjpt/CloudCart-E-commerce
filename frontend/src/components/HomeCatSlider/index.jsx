import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import image from "../../assets/image.jpg";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-4 pb-8">
      <div className="container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="sliderHome"
          slidesPerView={8}
          spaceBetween={10}
        >
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item py-3 px-3 bg-white rounded-md text-center flex items-center justify-center flex-col group">
                <img src={image} alt="" className="transform group-hover:scale-110 transition-all duration-200" />
                <h3 className="!text-[15px] !font-[400] !mt-1">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
