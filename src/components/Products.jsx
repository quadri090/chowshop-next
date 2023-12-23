"use client"

import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext.jsx";
import Link from "next/link";
import Image from "next/image";

export default function Products(props) {
  const { id, itemName, price, itemImage } = props.data;
  const { addToCart, cartItems } = useContext(HomeContext);
  const cartItemCount = cartItems[id];

  return (
    <div className={`font-Poppins text-base font-semibold sm:w-[320px] ${props.proClasses}`}>
      <div className="w-[320px] sm:w-[266px] h-[150px] mt-[35px]">
        <Image src={itemImage} alt="" />
      </div>
      <div className="flex justify-between mt-[15px] text-[14px] sm:text-[16px] font-light">
        <p className=" text-primary-light-grey">{itemName}</p>
        <p className="text-primary-red font-bold">#{price.toLocaleString("en-US")}</p>
      </div>
      <div className="flex justify-between mt-[15px]">
        <button
          className="w-[100px] sm:w-[138px] text-[12px] sm:text-[16px] h-[40px] font-light text-primary-red border-[1px] border-primary-red rounded-[6px] hover:bg-primary-very-light-grey hover:text-white"
          onClick={() => addToCart(id)}
        >
          Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
      <Link href="/cart">
        {cartItemCount > 0 && (
          <button className="flex items-center justify-center gap-[10px] fixed bottom-[20px] sm:bottom-[350px] left-auto sm:left-[20px] right-auto w-[320px] sm:w-[138px] text-[14px] sm:text-[16px] h-[50px] sm:h-[60px] font-semibold text-white bg-primary-red border-[1px] rounded-[6px]">
            Show Cart
            <i
              className="fa fa-shopping-cart text-[24px]"
              aria-hidden="true"
            ></i>
          </button>
        )}
      </Link>
    </div>
  );
}
