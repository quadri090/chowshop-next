"use client";

import React from "react";
import Link from "next/link";
import { ITEMS } from "@/items.js";
import Products from "@/components/Products.jsx";
import ShopNav from "@/components/ShopNav.jsx";
import Vendor from "@/components/Vendor.jsx";
import kfc from "../../../public/assets/kfc.png";
import chickRepLogo from "../../../public/assets/chickRepLogo.png";
import Layout from "../../components/layout.jsx";

const ViewAll = (props) => {
  return (
    <Link
      href={`${props.routte}`}
      className="mb-[15px] mt-[35px] flex w-full justify-center sm:mb-[29px] sm:justify-start"
    >
      <button className="text-base font-semibold text-primary-red">
        View all {props.vendorName}
      </button>
    </Link>
  );
};

export default function Vendors() {
  return (
    <Layout>
      <div className="mx-[20px] mb-[40px] mt-[80px] font-Poppins lg:mx-[100px]">
        <ShopNav
          width="w-[115px]"
          displayVerification="hidden"
          displayCart="hidden"
        />
        <p className="mt-[20px] text-base font-medium leading-normal md:mt-[50px]  md:text-[22px]">
          All Vendors
        </p>

        <div className="grid-cols-2 gap-x-12 gap-y-12 sm:mt-8 sm:grid lg:grid-cols-3">
          <div className="rounded-2xl shadow-xl sm:w-[320px] sm:px-8 ">
            <Vendor imgSrc={kfc} imgProps="w-[30px] h-[30px]" text="KFC" />
            <div className=" flex flex-col items-center justify-between gap-[20px] sm:flex-row">
              {ITEMS.map((item) => {
                if (item.id === 1) {
                  return <Products data={item} key={item.id} />;
                }
              })}
            </div>
            <ViewAll routte="/kfc" />

            <div className="w-full border-b sm:hidden"></div>
          </div>

          <div className="rounded-2xl shadow-xl sm:w-[320px] sm:px-8">
            <div className="mt-[40px] sm:mt-0">
              <Vendor
                imgSrc={chickRepLogo}
                imgProps="w-[30px] h-[30px]"
                text="Chicken Republic"
              />
            </div>
            <div className="flex flex-col items-center justify-between sm:flex-row">
              {ITEMS.map((item) => {
                if (item.id === 4) {
                  return <Products data={item} key={item.id} />;
                }
              })}
            </div>
            <ViewAll routte="/chickrep" />
            <div className="mt-[10px] w-full border-b sm:hidden"></div>
          </div>

          <div className="rounded-2xl shadow-xl sm:w-[320px] sm:px-8 ">
            <Vendor imgSrc={kfc} imgProps="w-[30px] h-[30px]" text="Item 7" />
            <div className=" flex flex-col items-center justify-between gap-[20px] sm:flex-row">
              {ITEMS.map((item) => {
                if (item.id === 1) {
                  return <Products data={item} key={item.id} />;
                }
              })}
            </div>
            <ViewAll routte="/kfc" />

            <div className="w-full border-b sm:hidden"></div>
          </div>

          <div className="rounded-2xl shadow-xl sm:w-[320px] sm:px-8">
            <div className="mt-[40px] sm:mt-0">
              <Vendor
                imgSrc={chickRepLogo}
                imgProps="w-[30px] h-[30px]"
                text="Zoyett Cakes & Snacks"
              />
            </div>
            <div className="flex flex-col items-center justify-between sm:flex-row">
              {ITEMS.map((item) => {
                if (item.id === 4) {
                  return <Products data={item} key={item.id} />;
                }
              })}
            </div>
            <ViewAll routte="/chickrep" />
            <div className="mt-[10px] w-full border-b sm:hidden"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
