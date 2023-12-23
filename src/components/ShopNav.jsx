"use client"

import React from 'react'
import Link from 'next/link'

export default function ShopNav(props) {
  return (
    <div>
        <div className={`${props.width} h-[21px] text-[14px] font-normal flex items-center justify-center gap-[3px]`}>
            <Link href="/">
                <p className="text-primary-very-light-grey">Home</p>
            </Link>
            <i className={`fa fa-chevron-right text-primary-very-light-grey text-[10px]`}></i>
            <Link href="/cart">
                <p className={`${props.textDisplay} ${props.displayCart}`}>Cart</p>
            </Link>
            <div className={`${props.displayVerification} flex justify-center items-center`}>
                
                <i className='fa fa-chevron-right text-primary-very-light-grey text-[10px]'></i>
                <p className=''>Verification</p>
            </div>
            <div className={`${props.displayVendors} flex justify-center items-center`}>
        
                <p className=''>Vendors</p>
            </div>
        </div>
    </div>
  )
}
