import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

const CategoryPanel = ({ isOpenCategoryPanel, openCategoryPanel }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="categoryPanel"
      onClick={() => openCategoryPanel(true)}
    >
      <h3 className="p-3 !text-[16px] !font-[500] flex justify-between items-center border-b-0.5 border-gray-400 shadow">
        Shop By Category{" "}
        <IoCloseSharp
          onClick={(e) => {
            e.stopPropagation();
            openCategoryPanel(false);
          }}
          className="text-[18px] cursor-pointer"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="relative list-none flex items-center">
            <Link to={"/"} className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>

            {submenuIndex !== null ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(null)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer z-50"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex !== null && (
              <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>

                  {innerSubmenuIndex === null ? (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(null)}
                    />
                  )}

                  {innerSubmenuIndex !== null && (
                    <ul className="inner_submenu_category absolute top-[100%] left-[0%] w-full pl-3 text-[#5e5e5e]">
                      <li>
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition-all duration-150 text-[14px] mb-1"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition-all duration-150 text-[14px] mb-1"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition-all duration-150 text-[14px] mb-1"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/"}
                          className="w-full !text-left !justify-start !px-3 link transition-all duration-150 text-[14px] mb-1"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={isOpenCategoryPanel}
        onClose={() => openCategoryPanel(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
