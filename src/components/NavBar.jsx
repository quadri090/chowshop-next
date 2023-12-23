"use client"

import React, { useContext } from "react";
import Link from "next/link";
// import HomeContext from "../context/HomeContext.jsx";

export default function NavBar() {

  // const { getTotalItemsCount } = useContext(HomeContext);
  // const totalItemCount = getTotalItemsCount();

  return (
    <div className="w-screen fixed top-0 h-[48px] sm:h-[60px] px-[20px] sm:px-[30px] lg:px-[100px] lg:mb-[42px] flex justify-between items-center bg-zinc-200 rounded-b-3xl text-[12px] sm:text-[16px] font-normal font-Poppins z-10 leading-normal border-b-4 border-white">
      <div className="w-[85px] sm:w-[90px] h-[24px] sm:h-[30px] text-[16px] sm:text-[20px] font-semibold flex items-center justify-center">
        <Link href="/">
            chow<span className="text-primary-red">Chow</span>
        </Link>
      </div>
      <ul className="flex items-center justify-center gap-[20px] sm:gap-[30px] lg:gap-[50px]">
        <Link href="/cart">
          <li className="flex relative text-primary-grey">
            <i
              className="fa fa-shopping-cart text-[24px] md:text-[36px]"
              aria-hidden="true"
            ></i>
            <div className="absolute flex items-center justify-center left-[50%] w-[15px] md:w-[20px] h-[15px] md:h-[20px] bg-white rounded-full outline md:outline-1">
              {/* {totalItemCount > 0 ? <p className="text-[10px] font-bold">{totalItemCount}</p> : <p className="text-[10px] font-bold">0</p>} */}
              
            </div>
          </li>
        </Link>

        <Link
          href="/login"
          className={` w-[64px] sm:w-[92px] h-[26px] sm:h-[40px] flex items-center justify-center rounded-[5px] text-primary-red font-medium border border-primary-red`}
          
        >Log In
        </Link>
      </ul>
    </div>
  )
}
