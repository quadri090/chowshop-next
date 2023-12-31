"use client"

import React from 'react'

export default function InputArea(props) {
  return (
    <div className={`${props.myProps} text-[14px] sm:text-base lg:text-[20px] font-medium rounded-[5px]`}>
        <label className=''>{props.head}</label>
        <input className={` ${props.inputprops} h-[50px] lg:h-[60px] p-[10px] border-[1px] mt-[8px] outline-none rounded-[5px]`} placeholder={`${props.placeholder}`} value={props.vvalue} minLength={props.mnlength} maxLength={`${props.maxLength}`} type={`${props.type}`} pattern={props.patternn} list={props.list} required></input>
    </div>
  )
}
