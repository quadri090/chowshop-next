"use client"

import React from 'react'
import Layout from '@/components/layout'
import Products from '@/components/Products'
import { ITEMS } from '@/items.js'
import Vendor from '@/components/Vendor'
import kfc from '../../../public/assets/kfc.png'

export default function KFC() {

  return (
    <Layout>
      <div className='mt-[80px] mb-[40px] mx-[20px] lg:mx-24 '>
          <Vendor
              imgSrc={kfc}
              imgProps='w-[30px] h-[30px]'
              text='KFC'
          />
          <div className=' flex flex-col gap-[20px] mt-8 sm:mt-10 sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between items-center'>
              {ITEMS.map((item) => {
                      if (item.id <= 3) {
                      return <Products data={item} key={item.id} proClasses='p-4 sm:p-8 shadow-xl rounded-2xl border'/>
                      }
                  })}  
          </div>
      </div>
    </Layout>
  )
}