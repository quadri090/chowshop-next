"use client"

import React from "react";

export default function LoginModal({children }) {

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[1000]"></div>
      <div className="sm:w-[500px] lg:w-[40%] fixed top-[10%] sm:top-[20px] left-[40px] sm:left-[100px] lg:left-[30%] right-[40px] sm:right-[100px] lg:right-[30%] z-[1000] bg-[#fff] rounded-[30px]">
        {children}
      </div>
    </>
  )
}
