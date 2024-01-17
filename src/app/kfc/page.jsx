"use client";

import React from "react";
import Layout from "@/components/layout";
import Products from "@/components/Products";
import { ITEMS } from "@/items.js";
import Vendor from "@/components/Vendor";
import kfc from "../../../public/assets/kfc.png";

export default function KFC() {
  return (
    <Layout>
      <div className="mx-[20px] mb-[40px] mt-[80px] lg:mx-24 ">
        <Vendor imgSrc={kfc} imgProps="w-[30px] h-[30px]" text="KFC" />
        <div className=" mt-8 flex flex-col items-center justify-between gap-[20px] sm:mt-10 sm:grid sm:grid-cols-2 lg:flex lg:flex-row">
          {ITEMS.map((item) => {
            if (item.id <= 3) {
              return (
                <Products
                  data={item}
                  key={item.id}
                  proClasses="p-4 sm:p-8 shadow-xl rounded-2xl border"
                />
              );
            }
          })}
        </div>
      </div>
    </Layout>
  );
}
