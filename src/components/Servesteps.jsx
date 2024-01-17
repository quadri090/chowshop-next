"use client";

import React from "react";
import Image from "next/image";

export default function ServeSteps(props) {
  return (
    <div className="mb-[70px] mt-[40px] flex flex-col items-center">
      <Image
        src={props.imgSrc}
        alt=""
        className="h-[150px] w-[200px] lg:h-[225px] lg:w-[300px]"
      />
      <p className="mt-[20px] text-[15px] font-medium lg:mt-[40px] lg:text-[25px]">
        {props.head}
      </p>
      <p className="w-[150px] text-[10px] font-normal lg:mt-[15px] lg:w-[270px] lg:text-[16px]">
        {props.desc}
      </p>
    </div>
  );
}
