import React from 'react'
import { Link } from 'react-router-dom'

const BannerBoxV2 = ({info, image}) => {
  return (
    <div className='w-full relative rounded-2xl group overflow-hidden'>
        <div className='w-full rounded-2xl'>
            <img src={image} alt="" className='w-full object-cover rounded-2xl h-[235px] group-hover:scale-105 duration-200 transition-all' />
        </div>
        <div className={`${info === "left" ? "left-0" : "right-0"} top-0 p-4 info absolute w-[70%] h-[100%] z-50 flex flex-col gap-1`}>
            <h2 className='text-[24px] font-[600] mb-5'>Samsung Phone</h2>
            <span className='text-[20px] text-primary font-[600] w-full'>&#8377;7999</span>
            <div>
              <Link to={'/'} className='text-[16px] font-[600] link uppercase underline'>Shop Now</Link>
            </div>
        </div>
    </div>
  )
}

export default BannerBoxV2