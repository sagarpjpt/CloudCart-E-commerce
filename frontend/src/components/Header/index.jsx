import React from "react";
import { Link } from "react-router-dom";
import FullLogo from "../../assets/Logo_Transparent.png";
import Search from "../Search";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "8F0177",
  },
}));

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-1 border-b-1 border-gray-300 shadow">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="flex items-center justify-between">
            <div className="col1 w-1/2">
              <p className="font-[500] text-[13px]">
                Get up to 50% off on new seasons styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-between">
              <ul className="text-[13px] flex gap-6">
                <li className="list-none link transition-all duration-150">
                  <Link to={"/help-center"}>Help Center</Link>
                </li>
                <li className="list-none link transition-all duration-150">
                  <Link to={"/order-tracking"}>Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-1 border-gray-300">
        <div className="w-11/12 lg:w-10/12 mx-auto flex justify-between items-center gap-10">
          {/* logo */}
          <div className="w-[25%]">
            <Link to={"/"}>
              {" "}
              <img
                src={FullLogo}
                alt="Logo"
                width={190}
                className="bg-primary rounded-md"
              />{" "}
            </Link>
          </div>
          {/* searchbar */}
          <div className="w-[45%]">
            <Search />
          </div>
          {/* nav-icons */}
          <div className="w-[35%] flex items-center">
            <ul className="flex items-center justify-around gap-3 w-full">
              <div className="flex gap-2">
                <li className="list-none">
                  <Link
                    to={"/login"}
                    className="link transition-all text-[15px] font-[500]"
                  >
                    Login
                  </Link>
                </li>
                <span className="px-0">/</span>
                <li className="list-none">
                  <Link
                    to={"/register"}
                    className="link transition-all text-[15px] font-[500]"
                  >
                    Register
                  </Link>
                </li>
              </div>
              <div className="flex gap-6">
                <li>
                  <Tooltip title="Compare">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <IoGitCompareOutline />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Wishlist">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <FaRegHeart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Cart">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <MdOutlineShoppingCart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
