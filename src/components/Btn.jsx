"use client";

import React from "react";
import Link from "next/link";

export default function Btn(props) {
  return (
    <Link href={props.routte}>
      <div
        className={` ${props.myClasses} flex h-[50px] w-full items-center justify-center rounded-[6px] bg-primary-red hover:bg-yellow-500  sm:mx-auto sm:h-[60px] sm:w-full lg:w-full`}
      >
        <button className="text-base font-semibold text-white">
          {props.text}
        </button>
      </div>
    </Link>
  );
}
