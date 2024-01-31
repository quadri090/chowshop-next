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
              className={`${props.display} right-2 top-2 rounded-md px-[5px] md:px-[10px] py-[3px] text-[10px] md:text-xs font-semibold text-white`}
            >
              Coming Soon!
            </p>
          )}
          <Image src={props.src} alt="icon" className="h-[30px] w-[30px] md:h-[50px] md:w-[50px]" />
          <p
            className={`mt-[11px] text-base font-medium md:text-[20px] ${
              location !== ""
                ? "text-primary-red"
                : "text-primary-very-light-grey"
            }`}
          >
            {props.head}
          </p>
          <p
            className={`mt-[7px] text-[14px] md:text-[18px] font-normal ${
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
