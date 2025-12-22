import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import banner3 from "../../assets/banner3.jpg";
import "./style.css";
import banner4 from '../../assets/banner4.jpg'
import Button from "@mui/material/Button";

const HomeBanner2 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
        className="w-full homeSliderV2"
      >
        <SwiperSlide className="w-full">
          <div className="w-full item rounded-2xl overflow-hidden relative group">
            <img src={banner3} className="w-full max-h-[490px]" />
            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible -translate-x-6 group-hover:-translate-x-0 transition-all duration-800 info absolute top-0 left-6 w-[50%] h-full z-50 p-16 flex flex-col items-center justify-center gap-6">
              <h4 className="text-[18px] font-[500] w-full text-left">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[34px] font-[700] w-full leading-none">
                Women Solid Round Green T-Shirt
              </h2>
              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left">
                Starting At Only{" "}
                <span className="text-primary text-[30px]">&#8377;299</span>
              </h3>
              <div className="w-full">
                <Button className="btn-org !font-bold !text-lg">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="w-full item rounded-2xl overflow-hidden relative text-white group">
            <img src={banner4} className="w-full max-h-[490px]" />
            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible -translate-x-6 group-hover:-translate-x-0 transition-all duration-800 info absolute top-0 left-6 w-[60%] h-full z-50 p-16 flex flex-col items-center justify-center gap-6">
              <h4 className="text-[18px] font-[500] w-full text-left">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[34px] font-[700] w-full leading-none">
                Women Solid Round Green T-Shirt
              </h2>
              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left">
                Starting At Only{" "}
                <span className="text-primary text-[30px]">&#8377;299</span>
              </h3>
              <div className="w-full">
                <Button className="btn-org !font-bold !text-lg">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBanner2;
