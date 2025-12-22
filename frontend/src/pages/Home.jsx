import React from "react";
import HomeSlider from "../components/HomeSlider";
import HomeCatSlider from "../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../components/ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeBanner2 from "../components/HomeSlider2";
import banner6 from '../assets/banner6.jpg'
import AdsBannerSliderV2 from "../components/AdsBannerSliderV2";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import BlogItem from "../components/BlogItem";
import Footer from "../components/Footer";

import BannerBoxV2 from "../components/BannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-[#f8e3f5]">
      <HomeSlider />

      <section>
        <div className="w-11/12 mx-auto flex items-center justify-center gap-5">
          <div className="part1 w-[70%] py-4">
            <HomeBanner2 />
          </div>
          <div className="w-[30%] flex flex-col gap-5 h-[490px]">
            <BannerBoxV2 info={"left"} image={banner6} />
            <BannerBoxV2 info={"left"} image={banner6} />
          </div>
        </div>
      </section>

      <HomeCatSlider />

      <section className="bg-white pt-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[26px] font-[600]">Popular List</h2>
              <p className="text-[14px] font-[500]">
                {" "}
                Do not miss the current offers util the end of March
              </p>
            </div>

            <div className="rightSec w-[55%]">
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="Fashion" />
                <Tab value="two" label="Electronic" />
                <Tab value="three" label="Bags" />
                <Tab value="four" label="Footwear" />
                <Tab value="five" label="Groceries" />
                <Tab value="six" label="Beauty" />
                <Tab value="seven" label="Wellness" />
              </Tabs>
            </div>
          </div>

          <ProductSlider items={5} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-10/12 mx-auto p-4 border border-[#8F0177] border-t-2 flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600]">Free Shipping</span>
            </div>

            <div className="col2">
              <p className="capitalize">
                Free Delivery Now on Your first oder and over &#8377;500
              </p>
            </div>

            <div className="col3">
              <p className="font-[500] text-[22px]">-Only &#8377;500</p>
            </div>
          </div>

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="bg-white -mt-6">
        <div className="container">
          <div className="pt-6">
            <h2 className="text-[26px] font-[600]">Latest Products</h2>
          </div>
          <ProductSlider items={5} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="bg-white py-6 pt-10">
        <div className="container">
          <div className="pt-6">
            <h2 className="text-[26px] font-[600]">Featured Products</h2>
          </div>
          <ProductSlider items={5} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-10 bg-white blogSection">
        <div className="py-5 container">
          <div className="py-3">
            <h2 className="text-[26px] font-[600]">From The Blogs</h2>
          </div>
          <Swiper navigation={true} modules={[Navigation]} slidesPerView={3} spaceBetween={10} className="mySwiper">
            <SwiperSlide><BlogItem/></SwiperSlide>
            <SwiperSlide><BlogItem/></SwiperSlide>
            <SwiperSlide><BlogItem/></SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* <Footer/> */}

    </div>
  );
};

export default Home;
