"use client";

import React from "react";
import Image from "next/image";

const Vendor = (props) => {
  return (
    <div className="mt-[40px] flex w-auto items-center gap-[10px] text-[15px] font-medium">
      <Image src={props.imgSrc} alt="" className={`${props.imgProps}`} />
      <p className="font-bold">{props.text}</p>
    </div>
  );
};

export default Vendor;
