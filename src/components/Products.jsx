"use client";

import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext.jsx";
import Link from "next/link";
import Image from "next/image";

export default function Products(props) {
  const { id, itemName, price, itemImage } = props.data;
  const { addToCart, cartItems } = useContext(HomeContext);
  const cartItemCount = cartItems[id];

  return (
    <div
      className={`font-Poppins text-base font-semibold sm:w-[320px] ${props.proClasses}`}
    >
      <div className="mt-[35px] h-[150px] w-[320px] sm:w-[266px]">
        <Image
          src={itemImage}
          width={320}
          height={266}
          alt="item image"
          className=""
        />
      </div>
      <div className="mt-[15px] flex justify-between text-[14px] font-light sm:text-[16px]">
        <p className=" text-primary-light-grey">{itemName}</p>
        <p className="font-bold text-primary-red">
          #{price.toLocaleString("en-US")}
        </p>
      </div>
      <div className="mt-[15px] flex justify-between">
        <button
          className="h-[40px] w-[100px] rounded-[6px] border-[1px] border-primary-red text-[12px] font-light text-primary-red hover:bg-primary-very-light-grey hover:text-white sm:w-[138px] sm:text-[16px]"
          onClick={() => addToCart(id)}
        >
          Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
      <Link href="/cart">
        {cartItemCount > 0 && (
          <button className="fixed bottom-[20px] left-auto right-auto flex h-[50px] w-[320px] items-center justify-center gap-[10px] rounded-[6px] border-[1px] bg-primary-red text-[14px] font-semibold text-white sm:bottom-[350px] sm:left-[20px] sm:h-[60px] sm:w-[138px] sm:text-[16px]">
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
