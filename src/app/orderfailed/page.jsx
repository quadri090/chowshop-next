"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import unsuccessfull from "../../../public/assets/unsuccessful.png";
import Btn from "@/components/Btn";

export default function OrderFailed() {
  return (
    <>
      <NavBar />
      <div className="mt-[150px] flex flex-col items-center justify-center  text-center font-Poppins">
        <div className="py-auto w-[300px]">
          <div className="">
            <Image
              src={unsuccessfull}
              alt="An Image"
              width={500}
              height={500}
            />
          </div>
          <div className="">
            <p className="text-[20px] font-bold text-primary-red ">
              Order Unsuccessful
            </p>
            <p className="text-[15px] text-primary-grey">
              Your order has been <br /> cancelled.
            </p>
          </div>
          <div className="mx-auto mt-6 w-[200px]">
            <Btn routte="/" text="Home" />
          </div>
        </div>
      </div>
    </>
  );
}
