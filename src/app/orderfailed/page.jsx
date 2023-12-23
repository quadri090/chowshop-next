"use client"

import React from 'react'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import unsuccessfull from '../../../public/assets/unsuccessful.png'
import Btn from '@/components/Btn'

export default function OrderFailed() {
  return (
    <>
        <NavBar />
        <div className='flex flex-col items-center justify-center mt-[150px]  font-Poppins text-center'>
            <div className='w-[300px] py-auto'>
                <div className=''>
                    <Image src={unsuccessfull}
                        alt="An Image"
                        width={500}
                        height={500}
                     />
                </div>
                <div className=''>
                    <p className='text-[20px] font-bold text-primary-red '>Order Unsuccessful</p>
                    <p className='text-[15px] text-primary-grey'>Your order has been <br /> cancelled.</p>
                </div>
                <div className='w-[200px] mt-6 mx-auto'>
                    <Btn 
                        routte='/'
                        text='Home'
                    />
                </div>
            </div>
    </div>
    </>
  )
}
