import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "./style.css";

const Navigation = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);

  const openCategoryPanel = (newOpen) => {
    setIsOpenCategoryPanel(newOpen);
  };

  return (
    <>
      <nav className="w-full py-2">
        <div className="w-11/12 lg:w-10/12 mx-auto flex justify-between items-center gap-10">
          {/* col1 */}
          <div className="w-[20%]">
            <Button
              className="!text-black flex gap-2 uppercase !font-extrabold !w-full"
              onClick={() => openCategoryPanel(true)}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <LiaAngleDownSolid className="text-[18px] ml-auto font-bold" />
            </Button>
          </div>
          {/* col2 */}
          <div className="w-[60%]">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition-all duration-150 font-[500] text-[14px] px-1 py-2 group text-center relative"
                >
                  Home
                  <span className="w-full h-1 bg-primary absolute bottom-0 left-0 hidden group-hover:block"></span>
                </Link>
              </li>
              <li className="list-none relative group">
                <Link
                  to={"/"}
                  className="link transition-all duration-150 font-[500] text-[14px] px-1 py-2 group text-center relative"
                >
                  Fashion
                  <span className="w-full h-1 bg-primary absolute bottom-0 left-0 hidden group-hover:block"></span>
                </Link>

                <div
                  className="opacity-0 invisible group-hover:visible group-hover:opacity-100 submenu absolute top-[120%] left-[0%] min-w-[175px] bg-white shadow-md transform translate-y-2 group-hover:translate-y-0 
                  transition-all duration-200 ease-out z-50"
                >
                  <ul>
                    <li className="list-none w-full relative hover:!text-[#8F0177]">
                      <Link className="w-full hover:!text-[#8F0177]" to={"/"}>
                        <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                          Men
                        </Button>
                      </Link>
                      <div className="inner_submenu absolute min-w-[175px] bg-white shadow-md z-50">
                        <ul>
                          <li className="list-none w-full ">
                            <Link className="w-full hover:!text-[#8F0177]" to={"/"}>
                              <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                                T-Shirt
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full ">
                            <Link className="w-full" to={"/"}>
                              <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full ">
                            <Link className="w-full" to={"/"}>
                              <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                                Footwear
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full ">
                            <Link className="w-full" to={"/"}>
                              <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                                Watch
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full ">
                            <Link className="w-full" to={"/"}>
                              <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                                Pants
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full ">
                      <Link className="w-full" to={"/"}>
                        <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full ">
                      <Link className="w-full" to={"/"}>
                        <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full ">
                      <Link className="w-full" to={"/"}>
                        <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full ">
                      <Link className="w-full" to={"/"}>
                        <Button className="w-full !text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none hover:!text-[#8F0177]">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition-all duration-150 font-[500] text-[14px] px-1 py-2 group text-center relative"
                >
                  Electronics
                  <span className="w-full h-1 bg-primary absolute bottom-0 left-0 hidden group-hover:block"></span>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition-all duration-150 font-[500] text-[14px] px-1 py-2 group text-center relative"
                >
                  Bags
                  <span className="w-full h-1 bg-primary absolute bottom-0 left-0 hidden group-hover:block"></span>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition-all duration-150 font-[500] text-[14px] px-1 py-2 group text-center relative"
                >
                  Footwear
                  <span className="w-full h-1 bg-primary absolute bottom-0 left-0 hidden group-hover:block"></span>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition-all duration-150 font-[500] text-[14px] px-1 py-2 group text-center relative"
                >
                  Groceries
                  <span className="w-full h-1 bg-primary absolute bottom-0 left-0 hidden group-hover:block"></span>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition-all duration-150 font-[500] text-[14px] px-1 py-2 group text-center relative"
                >
                  Beauty
                  <span className="w-full h-1 bg-primary absolute bottom-0 left-0 hidden group-hover:block"></span>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition-all duration-150 font-[500] text-[14px] px-1 py-2 group text-center relative"
                >
                  Wellness
                  <span className="w-full h-1 bg-primary absolute bottom-0 left-0 hidden group-hover:block"></span>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition-all duration-150 font-[500] text-[14px] px-1 py-2 group text-center relative"
                >
                  Jewellery
                  <span className="w-full h-1 bg-primary absolute bottom-0 left-0 hidden group-hover:block"></span>
                </Link>
              </li>
            </ul>
          </div>
          {/* col3 */}
          <div className="w-[20%]">
            <p className="text-[14px] font-[500] items-center gap-2 mb-0 mt-0 flex">
              <GoRocket />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      {/* category panel */}
      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCategoryPanel={isOpenCategoryPanel}
      />
    </>
  );
};

export default Navigation;
