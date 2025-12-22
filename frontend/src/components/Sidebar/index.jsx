import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = () => {
  const categories = [
    "Fashion",
    "Electronics",
    "Bags",
    "Footwear",
    "Groceries",
    "Beauty & Wellness",
    "Jewellery",
  ];
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  return (
    <aside className="sidebar p-4 pr-0">
      <div className="box">
        <h3
          className="mb-3 text-[16px] font-[600] flex justify-between items-center cursor-pointer link"
          onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
        >
          Shop By Category
          <FaAngleDown
            className={`text-lg transition-transform duration-300 ${
              isOpenCategoryFilter ? "rotate-180" : ""
            }`}
          />
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll w-full">
            {categories.map((item) => (
              <FormControlLabel
                key={item}
                control={<Checkbox size="small" />}
                label={item}
                className="w-full"
              />
            ))}
          </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
