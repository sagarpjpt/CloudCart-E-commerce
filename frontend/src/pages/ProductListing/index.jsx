import React from "react";
import Sidebar from "../../components/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ProductListing = () => {
  return (
    <section className="py-8 bg-[#f1f1f1]">
      <div className="container !mb-5">
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link className="link" underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              className="link"
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Fashion
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="container flex gap-3">
        <div className="sidebarWrapper w-[20%] h-full bg-white px-3 shadow-lg">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
