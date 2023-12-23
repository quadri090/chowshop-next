"use client"

import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import Image from "next/image";

function MyButton(props) {
  return (
    <button className="w-[20px] md:w-[29px] h-[20px] md:h-[29px] flex items-center justify-center text-primary-grey border-[1px] border-primary-red lg:rounded-[5px] rounded-full">
      {props.text}
    </button>
  );
}

export default function CartItems(props) {
  const { id, itemName, price, itemImage } = props.data;
  const { cartItems, addToCart, removeFromCart, clearItem } =
    useContext(HomeContext);
  const itemTotalPrice = price * cartItems[id];

  return (
    <>
      <div className="h-[46px] md:h-[75px] flex justify-between font-Poppins mt-[20px]">
        <div className="flex gap-[14px] sm:gap-8 w-[210px] md:w-[400px]">
          <button className="my-auto" onClick={() => clearItem(id)}>
            <i className="fa fa-trash sm:text-[24px]" aria-hidden="true"></i>
          </button>
          <div className="w-[57px] md:w-[133px] h-[46px] md:h-[75px] border">
            <Image src={itemImage} alt="" className="w-[57px] h-[46px] sm:w-[133px] sm:h-[75px]" />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[11px] md:text-[16px] text-primary-grey font-semibold">
              {itemName}
            </p>
            <div className="flex items-center justify-start gap-[10px] text-primary-red">
              <div onClick={() => addToCart(id)}>
                <MyButton text="+" />
              </div>
              <p className="text-[14px] font-bold ">{cartItems[id]}</p>
              <div onClick={() => removeFromCart(id)}>
                <MyButton text="-" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-[15px] sm:text-[18px] font-medium">
            #{itemTotalPrice.toLocaleString("en-US")}
          </p>
        </div>
      </div>
      <div className="border-b-[1px] mt-[20px]"></div>
    </>
  );
}
