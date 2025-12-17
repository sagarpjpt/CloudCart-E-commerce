import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import banner from '../../assets/banner.jpg'
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="adsBannerSlider pt-12">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={props.items} spaceBetween={10}>
        <SwiperSlide>
            <BannerBox img={banner} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={banner} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={banner} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={banner} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={banner} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={banner} link={'/'} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
