"use client"

import React from "react";
import Link from "next/link";
import { ITEMS } from "@/items.js";
import Products from "@/components/Products.jsx";
import ShopNav from "@/components/ShopNav.jsx";
import Vendor from "@/components/Vendor.jsx";
import kfc from "../../../public/assets/kfc.png";
import chickRepLogo from "../../../public/assets/chickRepLogo.png";
import Layout from "../../components/layout.jsx"

const ViewAll = (props) => {
  return (
    <Link
      href={`${props.routte}`}
      className="w-full flex justify-center sm:justify-start mt-[35px] mb-[15px] sm:mb-[29px]"
    >
      <button className="text-primary-red text-base font-semibold">
        View all {props.vendorName}
      </button>
    </Link>
  );
};

export default function Vendors() {
  return (
    <Layout>
      <div className="mx-[20px] lg:mx-[100px] mt-[80px] mb-[40px] font-Poppins">
        <ShopNav
          width="w-[115px]"
          displayVerification="hidden"
          displayCart="hidden"
        />
        <p className="mt-[20px] md:mt-[50px] text-base md:text-[22px] font-medium  leading-normal">
          All Vendors
        </p>

        <div className="sm:grid grid-cols-3 gap-x-12 gap-y-12 sm:mt-8">
          <div className="sm:w-[320px] sm:px-8 shadow-xl rounded-2xl ">
            <Vendor imgSrc={kfc} imgProps="w-[30px] h-[30px]" text="KFC" />
            <div className=" flex flex-col gap-[20px] sm:flex-row justify-between items-center">
              {ITEMS.map((item) => {
                if (item.id === 1) {
                  return <Products data={item} key={item.id}/>;
                }
              })}
            </div>
            <ViewAll routte="/kfc" />

            <div className="border-b w-full sm:hidden"></div>
          </div>

          <div className="sm:w-[320px] sm:px-8 shadow-xl rounded-2xl">
            <div className="mt-[40px] sm:mt-0">
              <Vendor
                imgSrc={chickRepLogo}
                imgProps="w-[30px] h-[30px]"
                text="Chicken Republic"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              {ITEMS.map((item) => {
                if (item.id === 4) {
                  return <Products data={item} key={item.id}/>;
                }
              })}
            </div>
            <ViewAll routte="/chickrep" />
            <div className="border-b w-full mt-[10px] sm:hidden"></div>
          </div>

          <div className="sm:w-[320px] sm:px-8 shadow-xl rounded-2xl ">
            <Vendor imgSrc={kfc} imgProps="w-[30px] h-[30px]" text="Item 7" />
            <div className=" flex flex-col gap-[20px] sm:flex-row justify-between items-center">
              {ITEMS.map((item) => {
                if (item.id === 1) {
                  return <Products data={item} key={item.id}/>;
                }
              })}
            </div>
            <ViewAll routte="/kfc" />

            <div className="border-b w-full sm:hidden"></div>
          </div>

          <div className="sm:w-[320px] sm:px-8 shadow-xl rounded-2xl">
            <div className="mt-[40px] sm:mt-0">
              <Vendor
                imgSrc={chickRepLogo}
                imgProps="w-[30px] h-[30px]"
                text="Zoyett Cakes & Snacks"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              {ITEMS.map((item) => {
                if (item.id === 4) {
                  return <Products data={item} key={item.id}/>;
                }
              })}
            </div>
            <ViewAll routte="/chickrep" />
            <div className="border-b w-full mt-[10px] sm:hidden"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
