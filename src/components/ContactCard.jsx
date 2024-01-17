"use client";

import React from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactCard() {
  const socialIcons = " text-primary-red text-[24px] w-[20px] h-[20px]";

  return (
    <div className="mb-0 flex flex-col items-center justify-center rounded-t-3xl bg-zinc-200 py-12 text-[12px] font-normal sm:m-5 sm:mt-24  sm:rounded-none lg:mt-36 lg:px-16 lg:text-[18px]">
      <p className="text-base font-medium lg:text-[18px]">Contact Us</p>
      <div className="ml-[8px] mt-[17px] flex gap-[30px]">
        <FaXTwitter className={`${socialIcons} mt-[3px]`}></FaXTwitter>
        <i className={`fa fa-youtube-play ${socialIcons}`}></i>
        <i className={`fa fa-facebook ${socialIcons}`}></i>
      </div>
      <div className="flex w-full flex-col items-center justify-between sm:flex-row  sm:px-5">
        <p className="mt-[34px] ">Terms & Conditions. Privacy Policy</p>
        <p className="mt-[20px] w-[200px] text-center sm:mt-[34px] sm:w-auto">
          ©Copyright 2023.{" "}
          <span className="font-semibold">
            chow<span className="text-primary-red">Chow</span>
          </span>{" "}
          is a registered trademark
        </p>
      </div>
    </div>
  );
}
