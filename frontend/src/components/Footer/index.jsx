import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { CiGift } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import mastercard from '../../assets/paymentcards/mastercard.png'
import paypal from '../../assets/paymentcards/paypal.png'
import razorpay from '../../assets/paymentcards/razorpay.png'
import visa from '../../assets/paymentcards/visa.png'

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container">
        <div className="flex items-center justify-around bg-white rounded-md py-3">
          <div className="col flex items-center justify-center flex-col group">
            <LiaShippingFastSolid className="text-[45px] group-hover:text-primary group-hover:translate-y-1 transition-all duration-200" />
            <h3 className="text-[16px] font-[500] mt-2">Free Shipping</h3>
            <p className="text-[12px] font-[400]">For all Orders Over 500rs</p>
          </div>
          <div className="col flex items-center justify-center flex-col group">
            <PiKeyReturnLight className="text-[45px] group-hover:text-primary group-hover:translate-y-1 transition-all duration-200" />
            <h3 className="text-[16px] font-[500] mt-2">30 Days Returns</h3>
            <p className="text-[12px] font-[400]">For an Exchange Product</p>
          </div>
          <div className="col flex items-center justify-center flex-col group">
            <IoWalletOutline className="text-[45px] group-hover:text-primary group-hover:translate-y-1 transition-all duration-200" />
            <h3 className="text-[16px] font-[500] mt-2">SecurePayment</h3>
            <p className="text-[12px] font-[400]">Payment Cards Accepted</p>
          </div>
          <div className="col flex items-center justify-center flex-col group">
            <CiGift className="text-[45px] group-hover:text-primary group-hover:translate-y-1 transition-all duration-200" />
            <h3 className="text-[16px] font-[500] mt-2">Special Gifts</h3>
            <p className="text-[12px] font-[400]">On First Pruduct Order</p>
          </div>
          <div className="col flex items-center justify-center flex-col group">
            <BiSupport className="text-[45px] group-hover:text-primary group-hover:translate-y-1 transition-all duration-200" />
            <h3 className="text-[16px] font-[500] mt-2">Support 24/7</h3>
            <p className="text-[12px] font-[400]">Contact us Anytime</p>
          </div>
        </div>

        <div className="py-2 text-primary">
        </div>

        <div className="bg-white py-10 footer flex items-center justify-around px-16 gap-20">
          <div className="part1 w-[25%] border-r border-primary">
            <h2 className="text-[20px] font-[600] mb-3">Contact us</h2>
            <p className="text-[14px] font-[400] mb-2 text-gray-800">
              CloudCart - Buy & Sell Anything <br />
              34/10 Kidwai Nagar, <br /> Lucknow
            </p>
            <Link
              className="link text-[14px] text-gray-800"
              to={"mailto:sagarprjpt99@gmail.com"}
            >
              sales@shivamcodec.com
            </Link>
            <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">
              (+91) 7355-167-893
            </span>
            <div className="flex items-center gap-2">
              <BiSupport className="text-[40px] text-primary" />
              <span>
                Chat With Us <br /> Get Help
              </span>
            </div>
          </div>

          {/* <div className='h-60 w-[1px] bg-primary'></div> */}

          <div className="part2 w-[75%] flex flex-wrap justify-around">
            <div className="col1 w-[25%]">
              <h2 className="text-[20px] font-[600] mb-3">Pruducts</h2>
              <ul>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Price Drop
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    New Products
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Best Sales
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Contact Us
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Sitemap
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Stores
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col2 w-[25%]">
              <h2 className="text-[20px] font-[600] mb-3">Our Company</h2>
              <ul>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Delivery
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Legal Notice
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Terms And Condition
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    About Us
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Secure Payment
                  </Link>
                </li>
                <li className="text-[14px] font-[400] mb-2 text-gray-800 list-none">
                  <Link to={"/"} className="link">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col3 w-[40%]">
              <h2 className="text-[20px] font-[600] mb-3">
                Subscribe To Newsletter
              </h2>
              <p className="text-[14px] font-[400] mb-2 text-gray-800">
                Subscribe to our latest newsletter to got news about special
                discounts
              </p>
              <form action="" className="mt-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="w-full h-[35px] outline-none px-4 py-5 bg-[#f8e3f5] rounded-md focus:border-primary focus:border-1"
                  />
                </div>
                <Button className="btn-org !mt-4 !p-2 !px-3">Subscribe</Button>
                <div className="flex gap-2 mt-2 w-full">
                  <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="I agree to terms and conditions and the privacy policy"
                    className=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bottomStrip border-primary pt-3 pb-10 bg-white">
          <hr className="w-11/12 mx-auto text-primary" />
          <div className="container pt-7 flex items-center justify-between">
            <ul className="flex gap-6 items-center text-2xl">
              <li className="list-none">
                <Link to={"/"} className="hover:text-primary">
                  <FaFacebook />
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="hover:text-primary">
                  <FaInstagram />
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="hover:text-primary">
                  <FaTwitter />
                </Link>
              </li>
              <li className="list-none">
                <Link to={"/"} className="hover:text-primary">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
            <div className="text-[14px] text-gray-500">
              @2025 - Ecommerce Soft by ShivamCodec
            </div>
            <div className="payment-cards flex gap-3 items-center">
              <img src={paypal} alt="" className="w-[60px] bg-white" />
              <img src={razorpay} alt="" className="w-[60px]" />
              <img src={visa} alt="" className="w-[30px]" />
              <img src={mastercard} alt="" className="w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
