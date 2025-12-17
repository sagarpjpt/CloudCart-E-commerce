import React from "react";
import product from "../../assets/product.jpg";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem rounded-md overflow-hidden shadow-md">
      <div className="imageWrapper overflow-hidden rounded-md relative group">
        <img
          src={product}
          alt="product img"
          className="w-full h-[225px] object-cover group-hover:scale-105 transition-all duration-100"
        />
        <span className="absolute top-[10px] left-[10px] z-50 bg-green-400 text-white p-2 rounded-lg text-[12px]">
          10% Off
        </span>

        <div className="actions absolute top-2 -right-4 z-50  w-[80px] transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible -translate-y-6 group-hover:translate-y-0 duration-150 ease-in">
          <div className="flex items-center gap-4 flex-col">
            <Button className="!w-[32px] !h-[32px] !min-w-[32px] !rounded-full !bg-white !text-black hover:!text-white hover:!bg-primary !p-1">
              <MdZoomOutMap className="text-[18px] text-black hover:text-white w-full h-full" />
            </Button>
            <Button className="!w-[32px] !h-[32px] !min-w-[32px] !rounded-full !bg-white !text-black hover:!text-white hover:!bg-primary !p-1">
              <IoGitCompareOutline className="text-[18px] text-black hover:text-white w-full h-full" />
            </Button>
            <Button className="!w-[32px] !h-[32px] !min-w-[32px] !rounded-full !bg-white !text-black hover:!text-white hover:!bg-primary !p-1">
              <FaRegHeart className="text-[18px] text-black hover:text-white w-full h-full" />
            </Button>
          </div>
        </div>
      </div>
      <div className="info p-3 bg-[#f1f1f1]">
        <h6 className="text-[14px]">
          <Link to={"/"} className="link transition-all">
            Soylent Green
          </Link>
        </h6>
        <h3 className="text-[15px] title mt-1 font-[500] text-[rgba(0,0,0,0.9)]">
          <Link to={"/"} className="link transition-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
        </h3>
        <Rating
          name="size-small"
          defaultValue={4}
          size="small"
          className="mt-1"
          readOnly
        />
        <div className="flex items-center gap-4 mt-1">
          <span className="oldPrice line-through text-gray-500 text-[16px] font-[500]">
            &#8377;389
          </span>
          <span className="font-[600] text-[#8F0177]">&#8377;349</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
