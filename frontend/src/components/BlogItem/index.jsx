import React from 'react'
import blog from '../../assets/blog.jpg'
import {IoMdTime} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className='blogItem'>
        <div className="imgWrapper w-full overflow-hidden rounded-md group relative">
            <img src={blog} className='w-full transition-all group-hover:scale-105' alt="blog img" />
            <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[13px] font-[500] gap-1'>
                <IoMdTime className='text-xl'/> 12 Dec 2025
            </span>
        </div>
        <div className="info py-4">
            <h2 className='text-[17px] font-[600]'>
                <Link to={'/'} className='link'>
                    Nullam ullamcoprer
                </Link>
            </h2>
            <p className='text-[14px] font-[400] text-[rgba(0,0,0,0.6)] mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ab repellat est, consequatur illo quia, veniam cupiditate voluptates recusandae temporibus, ipsam vitae adipisci facilis nam repellendus odio......</p>
            <Link to={'/'} className='link font-[500] text-[14px] flex items-center mt-1 underline'><IoIosArrowForward/> Read More</Link>
        </div>
    </div>
  )
}

export default BlogItem