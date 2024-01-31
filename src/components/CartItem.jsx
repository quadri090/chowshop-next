"use client";

import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import Image from "next/image";

function MyButton(props) {
  return (
    <button className="flex h-[20px] w-[20px] items-center justify-center rounded-full border-[1px] border-primary-red text-primary-grey md:h-[29px] md:w-[29px] lg:rounded-[5px]">
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
      <div className="mt-[20px] flex h-[46px] justify-between font-Poppins md:h-[75px]">
        <div className="flex w-[210px] gap-[14px] sm:gap-8 md:w-[400px]">
          <button className="my-auto" onClick={() => clearItem(id)}>
            <i className="fa fa-trash sm:text-[24px]" aria-hidden="true"></i>
          </button>
          <div className="h-[46px] w-[57px] border md:h-[75px] md:w-[133px]">
            <Image
              src={itemImage}
              alt=""
              className="h-[46px] w-[57px] sm:h-[75px] sm:w-[133px] rounded-lg md:rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[11px] font-semibold text-primary-grey md:text-[16px]">
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
          <p className="text-[15px] font-medium sm:text-[18px]">
            #{itemTotalPrice.toLocaleString("en-US")}
          </p>
        </div>
      </div>
      <div className="mt-[20px] border-b-[1px]"></div>
    </>
  );
}
