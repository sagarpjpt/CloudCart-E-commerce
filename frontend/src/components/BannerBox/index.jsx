import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox group overflow-hidden rounded-md">
        <Link to={'/'}>
            <img src={props.img} alt="ads" className=" group-hover:scale-110 transition-all h-[210px]" />
        </Link>
    </div>
  );
};

export default BannerBox;
