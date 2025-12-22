import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import banner6 from '../../assets/banner6.jpg'
import BannerBoxV2 from "../BannerBoxV2";

const AdsBannerSliderV2 = (props) => {
  return (
    <div className="adsBannerSlider pt-12">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={props.items} spaceBetween={10}>
        <SwiperSlide>
            <BannerBoxV2 info={"left"} image={banner6} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info={"left"} image={banner6} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info={"left"} image={banner6} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info={"left"} image={banner6} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info={"left"} image={banner6} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info={"left"} image={banner6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV2;
