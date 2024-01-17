"use client";

import React from "react";

export default function LoginModal({ children }) {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] bg-black opacity-70"></div>
      <div className="fixed left-[40px] right-[40px] top-[10%] z-[1000] rounded-[30px] bg-[#fff] sm:left-[100px] sm:right-[100px] sm:top-[20px] sm:w-[500px] lg:left-[30%] lg:right-[30%] lg:w-[40%]">
        {children}
      </div>
    </>
  );
}
