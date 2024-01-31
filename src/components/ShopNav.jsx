"use client";

import React from "react";
import Link from "next/link";

export default function ShopNav(props) {
  return (
      <div
        className={`${props.width} flex h-[21px] items-center justify-center gap-[3px] text-[14px] md:text-[18px] font-normal`}
      >
        <Link href="/">
          <p className="text-primary-very-light-grey">Home</p>
        </Link>
        <i
          className={`fa fa-chevron-right text-[10px] text-primary-very-light-grey`}
        ></i>
        <Link href="/cart">
          <p className={`${props.textDisplay} ${props.displayCart}`}>Cart</p>
        </Link>
        <div
          className={`${props.displayVerification} flex items-center justify-center`}
        >
          <i className="fa fa-chevron-right text-[10px] text-primary-very-light-grey"></i>
          <p className="">Verification</p>
        </div>
        <div
          className={`${props.displayVendors} flex items-center justify-center`}
        >
          <p className="">Vendors</p>
        </div>
      </div>
  );
}
