"use client"

import React, { useContext } from 'react'
import { HomeContext } from "@/context/HomeContext.jsx";
import NavBar from '@/components/NavBar'
import successful from '../../../public/assets/successful.png'
import Btn from '@/components/Btn'
import Image from 'next/image';

export default function OrderSuccessfull() {
    const {
        clearCart
      } = useContext(HomeContext);

  return (
    <>
        <NavBar/>
        <div className='flex flex-col items-center justify-center mt-[150px]  font-Poppins text-center'>
                <div className='w-[300px] py-auto'>
                    <div className=''>
                        <Image src={successful}
                            alt="An Image"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className=''>
                    <p className='text-[20px] font-bold text-[#5EA304] '>Order Successful</p>
                    <p className='text-[15px] text-primary-grey'>We have started <br /> processing your order.</p>
                </div>
                <div className='w-[200px] mt-6 mx-auto' onClick={() => clearCart()}>
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
