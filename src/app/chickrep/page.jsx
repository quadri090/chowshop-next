"use client"

import React from 'react';
import Layout from '@/components/layout'
import Products from "@/components/Products.jsx";
import { ITEMS } from "@/items.js";
import Vendor from "@/components/Vendor.jsx";
import chickRepLogo from "../../../public/assets/chickRepLogo.png";

export default function ChickRep() {

  return (
    <Layout>
      <div className='mt-[80px] mb-[40px] mx-[20px] lg:mx-24'>
          <Vendor
              imgSrc={chickRepLogo}
              imgProps='w-[30px] h-[30px]'
              text='Chicken Republic'
          />
          <div className=' flex flex-col gap-[20px] sm:mt-[40px] sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between sm:justify-items-center items-center'>
              {ITEMS.map((item) => {
                      if (item.id > 3) {
                      return <Products data={item} key={item.id} proClasses='p-4 sm:p-8 shadow-2xl rounded-2xl border'/>
                      }
                  })}  
          </div>
          <div className='border-b w-full mt-[40px]'></div>
      </div>
    </Layout>
  )
}
