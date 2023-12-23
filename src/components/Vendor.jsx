"use client"

import React from 'react'
import Image from 'next/image'

 const Vendor = (props) => {
    return (
      <div className='flex items-center mt-[40px] w-auto gap-[10px] text-[15px] font-medium'>
        <Image src={props.imgSrc} alt="" className={`${props.imgProps}`} />
        <p className='font-bold'>{props.text}</p>
      </div> 
    )
  }

  export default Vendor
