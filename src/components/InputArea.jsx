"use client";

import React from "react";

export default function InputArea(props) {
  return (
    <div
      className={`${props.myProps} rounded-[5px] text-[14px] font-medium sm:text-base lg:text-[20px]`}
    >
      <label className="">{props.head}</label>
      <input
        className={` ${props.inputprops} mt-[8px] h-[50px] rounded-[5px] border-[1px] p-[10px] outline-none lg:h-[60px]`}
        placeholder={`${props.placeholder}`}
        value={props.vvalue}
        minLength={props.mnlength}
        maxLength={`${props.maxLength}`}
        type={`${props.type}`}
        pattern={props.patternn}
        list={props.list}
        required
      ></input>
    </div>
  );
}
