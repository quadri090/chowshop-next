"use client"

import React from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactCard() {
  const socialIcons = " text-primary-red text-[24px] w-[20px] h-[20px]";

  return (
    <div className="flex flex-col items-center justify-center py-12 lg:px-16 mb-0 sm:mt-24 lg:mt-36 text-[12px] lg:text-[18px] font-normal bg-zinc-200 rounded-t-3xl">
      <p className="text-base lg:text-[18px] font-medium">Contact Us</p>
      <div className="flex gap-[30px] mt-[17px] ml-[8px]">
        <FaXTwitter className={`${socialIcons} mt-[3px]`}></FaXTwitter>
        <i className={`fa fa-youtube-play ${socialIcons}`}></i>
        <i className={`fa fa-facebook ${socialIcons}`}></i>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <p className="mt-[34px] ">Terms & Conditions. Privacy Policy</p>
        <p className="mt-[20px] w-[200px] sm:w-auto text-center">
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