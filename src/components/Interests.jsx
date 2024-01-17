"use client";

import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import Image from "next/image";

export default function Interests(props) {
  const { location } = useContext(HomeContext);

  return (
    <Link href={`${props.routte}`}>
      <div className="relative flex h-[141px] w-auto items-center rounded-[10px] border text-primary-very-light-grey shadow-myBoxShadow lg:h-[169px]">
        <div className="items-cente flex flex-col justify-center px-[20px]">
          {location != "" && (
            <p
              className={`${props.display} right-2 top-2 rounded-md px-[5px] py-[3px] text-[10px] font-semibold text-white`}
            >
              Coming Soon!
            </p>
          )}
          <Image src={props.src} alt="icon" className="h-[30px] w-[30px]" />
          <p
            className={`mt-[11px] text-[16px] font-medium lg:text-[18px] ${
              location !== ""
                ? "text-primary-red"
                : "text-primary-very-light-grey"
            }`}
          >
            {props.head}
          </p>
          <p
            className={`mt-[7px] text-[14px] font-normal ${
              location !== ""
                ? "text-primary-grey"
                : "text-primary-very-light-grey"
            }`}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}
