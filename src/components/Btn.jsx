"use client"

import React from 'react'
import Link from 'next/link'

export default function Btn(props) {
  return (
    <Link href={props.routte}>
        <div className={` ${props.myClasses} w-full sm:w-full lg:w-full h-[50px] sm:h-[60px] flex items-center justify-center  rounded-[6px] sm:mx-auto bg-primary-red hover:bg-yellow-500`}> 
            <button className='text-base font-semibold text-white'>{props.text}</button>    
        </div>
    </Link>
  )
}